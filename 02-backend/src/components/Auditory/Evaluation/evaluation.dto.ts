import {
    IsArray,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  
  export class QuestionSubmissionDto {
    @IsNumber()
    id: number;
  
    @IsString()
    answer: string;
  
    @IsArray()
    @IsString({ each: true })
    evidence: string[];
  
    @IsOptional()
    @IsString()
    observations?: string;
  
    @IsNumber()
    score: number;
  }
  
  export class SectionSubmissionDto {
    @IsNumber()
    id: number;
  
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionSubmissionDto)
    questions: QuestionSubmissionDto[];
  }
  
  export class CreateEvaluationDto {
    @IsString()
    name: string;
  
    @IsString()
    description: string;
  
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SectionSubmissionDto)
    sections: SectionSubmissionDto[];
  }
  