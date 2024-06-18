import { IsNotEmpty, IsString, IsNumber, IsDate, IsOptional } from 'class-validator';

export class CreateLeadDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    budget: number;

    @IsString()
    @IsOptional()
    status: string;

    @IsString()
    @IsOptional()
    responsible: string;

    @IsDate()
    @IsOptional()
    createdAt: Date;
}
