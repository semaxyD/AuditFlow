import {IsNumber,IsNotEmpty} from 'class-validator';
  
  export class DeleteFrequencyDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;
  
    @IsNotEmpty()
    @IsNumber()
    companyId: number;

    @IsNotEmpty()
    @IsNumber()
    normId: number;
  }