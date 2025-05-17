import {IsEmail, IsString,IsNumber} from 'class-validator';
export class UpdateCompanyDto {
    @IsString()
    name?: string;

    @IsNumber()
    nit?: number;

    @IsString()
    address?: string;

    @IsEmail()
    @IsString()
    contactEmail?: string;

    @IsString()
    contactName?: string;

    @IsString()
    phone?: string;
}