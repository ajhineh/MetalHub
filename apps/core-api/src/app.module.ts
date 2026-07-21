import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RfqModule } from './rfq/rfq.module';

@Module({
  imports: [RfqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
