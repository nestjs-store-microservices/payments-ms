import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';

@Module({
  controllers: [],
  imports: [PaymentsModule],
})
export class AppModule {}
