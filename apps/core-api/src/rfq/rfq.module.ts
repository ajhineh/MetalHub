import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { RfqController } from './rfq.controller';
import { CreateRfqHandler } from './commands/create-rfq.handler';

export const CommandHandlers = [CreateRfqHandler];

@Module({
  imports: [CqrsModule],
  controllers: [RfqController],
  providers: [...CommandHandlers],
})
export class RfqModule {}
