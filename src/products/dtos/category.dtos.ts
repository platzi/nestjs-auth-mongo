import { IsString, IsNotEmpty, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
