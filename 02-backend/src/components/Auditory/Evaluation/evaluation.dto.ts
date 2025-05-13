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
    comments?: string;
  
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
  
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SectionSubmissionDto)
    sections: SectionSubmissionDto[];

    @IsOptional()
    @IsString()
    observations?: string;

  }
  