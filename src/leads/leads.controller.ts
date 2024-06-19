import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { Lead } from './entities/lead.entity';
import { CreateContactDto } from './dto/create-lead.dto';

@Controller('api/leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Get()
  async findAll(@Query('query') query: string): Promise<Lead[]> {
    return this.leadsService.findAll(query);
  }

  @Post('create')
  async create(@Body() createLeadDto: CreateLeadDto, createContactDto: CreateContactDto ): Promise<any> {
    return this.leadsService.create(createLeadDto, createContactDto);
  }

}
