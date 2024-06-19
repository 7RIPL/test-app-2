// import {IsNotEmpty, IsString, IsOptional, IsNumber, IsDate} from 'class-validator';
//
// export class CreateLeadDto {
//     @IsNotEmpty()
//     @IsString()
//     name: string;
//
//     @IsNotEmpty()
//     @IsNumber()
//     budget: number;
//
//     @IsString()
//     @IsOptional()
//     status: string;
//
//     @IsString()
//     @IsOptional()
//     responsible: string;
//
//     @IsDate()
//     @IsOptional()
//     createdAt: Date;
//
//
//     @IsNotEmpty()
//     contacts: CreateContactDto[];
// }
//
// export class CreateContactDto {
//     @IsNotEmpty()
//     @IsString()
//     name: string;
//
//     @IsString()
//     @IsOptional()
//     email: string;
//
//     @IsString()
//     @IsOptional()
//     phone: string;
// }