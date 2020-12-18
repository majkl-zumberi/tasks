import { IsBoolean, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMinitaskDto {
  @ApiProperty({
    required: true,
    description: 'The name of the task',
    default: 'Learn NestJS',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  done: string;

  @ApiProperty({ required: false })
  taskNote?: string;

  @ApiProperty({ required: false })
  note?: string;
}
