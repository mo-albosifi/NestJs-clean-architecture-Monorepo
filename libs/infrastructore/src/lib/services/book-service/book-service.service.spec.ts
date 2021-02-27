import { Test, TestingModule } from '@nestjs/testing';
import { BookServiceService } from './book-service.service';

describe('BookServiceService', () => {
  let service: BookServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookServiceService],
    }).compile();

    service = module.get<BookServiceService>(BookServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
