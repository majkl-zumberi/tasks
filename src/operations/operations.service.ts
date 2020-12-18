import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Operation, OperationDocument } from './schemas/operation.schema';

@Injectable()
export class OperationsService {
  constructor(@InjectModel(Operation.name) private operationModel: Model<OperationDocument>,) {}


  async create(createOperationDto: CreateOperationDto) {
    const createdOperation = new this.operationModel({
      tasks: createOperationDto.taskIds,
      name: createOperationDto.name,
    });

    try {
      const doc = await createdOperation.save();
      return doc.populate('tasks').execPopulate(); // ritorna il documento salvato e popolato
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async findAll(): Promise<Operation[]> {
    return await this.operationModel.find({}).populate('tasks').exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} operation`;
  }

  update(id: number, updateOperationDto: UpdateOperationDto) {
    return `This action updates a #${id} operation`;
  }

  remove(id: number) {
    return `This action removes a #${id} operation`;
  }
}
