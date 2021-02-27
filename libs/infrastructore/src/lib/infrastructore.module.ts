import { Book } from 'libs/domain/src/lib/Entities/Book.entity';
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookServiceService } from './services/book-service/book-service.service';
import { DataBase_CONFIG } from './config/databaseConfig';

@Module({
  imports:[
    TypeOrmModule.forRoot(DataBase_CONFIG),
    TypeOrmModule.forFeature([Book])
  ],
  controllers: [],
  providers: [BookServiceService,
    ],
  exports: [TypeOrmModule],
  
})
export class InfrastructoreModule {}




