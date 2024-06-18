import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateContactDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    phone: string;
}