import { Test, TestingModule } from '@nestjs/testing';
import { DocumentosController } from './documentos.controller';
import { DocumentosService } from './documentos.service';

describe.skip('DocumentosController', () => {
  let controller: DocumentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentosController],
      providers: [DocumentosService],
    }).compile();

    controller = module.get<DocumentosController>(DocumentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
