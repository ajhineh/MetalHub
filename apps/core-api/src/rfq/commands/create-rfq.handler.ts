import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { CreateRfqCommand } from './create-rfq.command';
import { PrismaClient } from '@prisma/client';
// In a real scenario, this PrismaClient should be injected via a PrismaService.
const prisma = new PrismaClient();

@CommandHandler(CreateRfqCommand)
export class CreateRfqHandler implements ICommandHandler<CreateRfqCommand> {
  constructor(private publisher: EventPublisher) {}

  async execute(command: CreateRfqCommand) {
    console.log(`Executing CreateRfqCommand for title: ${command.title}`);
    
    // 1. Domain Logic & DB Write
    const rfq = await prisma.rFQ.create({
      data: {
        buyerId: command.buyerId,
        title: command.title,
        status: 'DRAFT'
      }
    });

    // 2. Event Sourcing Audit Trail Write
    await prisma.eventLog.create({
      data: {
        aggregateId: rfq.id,
        eventType: 'RFQDrafted',
        payload: { title: rfq.title, buyerId: rfq.buyerId }
      }
    });

    // 3. Emit Domain Event (would be pushed to RabbitMQ here in full implementation)
    // const rfqModel = this.publisher.mergeObjectContext(...);
    // rfqModel.apply(new RfqDraftedEvent(rfq.id));
    // rfqModel.commit();

    return rfq;
  }
}
