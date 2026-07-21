import { Controller, Post, Body } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateRfqCommand } from './commands/create-rfq.command';

@Controller('rfq')
export class RfqController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createRfq(@Body() dto: { buyerId: string; title: string; description: string }) {
    return this.commandBus.execute(
      new CreateRfqCommand(dto.buyerId, dto.title, dto.description),
    );
  }
}
