import { Test, TestingModule } from '@nestjs/testing';
import { OwoifyService } from './owoify.service';

describe('OwoifyService', () => {
  let service: OwoifyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OwoifyService],
    }).compile();

    service = module.get<OwoifyService>(OwoifyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
