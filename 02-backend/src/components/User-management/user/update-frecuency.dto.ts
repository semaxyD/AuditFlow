import {IsNumber} from 'class-validator';
  
  export class UpdateFrequencyDto {
    @IsNumber()
    userId: number;
  
    @IsNumber()
    companyId: number;

    @IsNumber()
    normId: number;

    @IsNumber()
    frequencyDays: number;
  }