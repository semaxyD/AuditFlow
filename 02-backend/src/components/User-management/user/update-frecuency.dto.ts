import {IsNumber,IsNotEmpty} from 'class-validator';
  
  export class UpdateFrequencyDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;
  
    @IsNotEmpty()
    @IsNumber()
    companyId: number;

    @IsNotEmpty()
    @IsNumber()
    normId: number;

    @IsNotEmpty()
    @IsNumber()
    frequencyDays: number;
  }