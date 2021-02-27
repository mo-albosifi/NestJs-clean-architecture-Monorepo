import { validationSchema } from './config/validation';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common'
import { configuration } from './config/configuration';
import { DomainService } from './domain.service';

@Module({
  imports:[ ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration],
    validationSchema,
  }),],
  controllers: [],
  providers: [DomainService],
  exports: [DomainService],
})
export class DomainModule {}
