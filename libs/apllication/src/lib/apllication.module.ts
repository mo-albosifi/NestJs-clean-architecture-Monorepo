import { IBookRepo } from './Reposetories/IBookRepo';
import { InfrastructoreModule } from './../../../infrastructore/src/lib/infrastructore.module';
import { DomainModule } from './../../../domain/src/lib/domain.module';
import { ApplicationService } from './application.service';
import { Module } from '@nestjs/common'
import { BookServiceService } from 'libs/infrastructore/src/lib/services/book-service/book-service.service';

@Module({
  imports:[DomainModule,InfrastructoreModule],
  controllers: [],
  providers: [ApplicationService,
    {
      provide: 'IBookRepo',
      useClass: BookServiceService
    }],
  exports: [ApplicationService],
})
export class ApllicationModule {}
