/* eslint-disable prettier/prettier */
import { IsString, IsEmail, MinLength } from 'class-validator';

export class LoginUserDTO {

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

}