import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { Lead } from './entities/lead.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact } from './entities/contact.entity';

@Controller('api/leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Get()
  async findAll(@Query('query') query: string): Promise<Lead[]> {
    return this.leadsService.findAll(query);
  }

  @Post()
  async createLead(@Body() createLeadDto: CreateLeadDto): Promise<Lead> {
    return this.leadsService.createLead(createLeadDto);
  }

  @Post('/contacts')
  async createContact(@Body() createContactDto: CreateContactDto): Promise<Contact> {
    return this.leadsService.createContact(createContactDto);
  }
  //
  // @Post()
  // create(@Body() createLeadDto: CreateLeadDto) {
  //   return this.leadsService.create(createLeadDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.leadsService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.leadsService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLeadDto: UpdateLeadDto) {
  //   return this.leadsService.update(+id, updateLeadDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.leadsService.remove(+id);
  // }
}
