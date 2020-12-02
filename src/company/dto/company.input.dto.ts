import { IsNotEmpty } from 'class-validator';

export class CompanyInputDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}
