import {IsEmail, IsString, MinLength} from 'class-validator';

export class LoginDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6,{message: "La contraseña debe ser de minimo 6 caracteres"})
    password: string;
}