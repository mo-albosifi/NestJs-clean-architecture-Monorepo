import { DomainModule } from './../../../../libs/domain/src/lib/domain.module';
import { ApllicationModule } from './../../../../libs/apllication/src/lib/apllication.module';
import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [ApllicationModule,DomainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
