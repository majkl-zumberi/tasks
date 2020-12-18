import { Test, TestingModule } from '@nestjs/testing';
import { MinitasksService } from './minitasks.service';

describe('MinitasksService', () => {
  let service: MinitasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinitasksService],
    }).compile();

    service = module.get<MinitasksService>(MinitasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
