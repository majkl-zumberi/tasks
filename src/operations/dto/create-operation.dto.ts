import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateOperationDto {
  @ApiProperty({
    required: true,
    description: 'The name of the Operation',
    default: 'Learn',
  })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsArray()
  taskIds: string[];
}
