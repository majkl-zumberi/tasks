import { Test, TestingModule } from '@nestjs/testing';
import { MinitasksController } from './minitasks.controller';

describe('MinitasksController', () => {
  let controller: MinitasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MinitasksController],
    }).compile();

    controller = module.get<MinitasksController>(MinitasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
