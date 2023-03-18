import { Test, TestingModule } from '@nestjs/testing';
import { LoremService } from './lorem.service';

describe('LoremService', () => {
  let service: LoremService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoremService],
    }).compile();

    service = module.get<LoremService>(LoremService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
