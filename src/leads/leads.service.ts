import { Injectable } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lead } from './entities/lead.entity';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';



@Injectable()
export class LeadsService {
  constructor(
      @InjectRepository(Lead)
      private readonly leadRepository: Repository<Lead>,
      @InjectRepository(Contact)
      private readonly contactRepository: Repository<Contact>,
  ) {}

  async findAll(query: string): Promise<Lead[]> {
    let leads = await this.leadRepository.find({
      relations: ['contacts'],
    });

    if (query) {
      leads = leads.filter(lead => {
        return (
            lead.name.toLowerCase().includes(query.toLowerCase()) ||
            lead.contacts.some(contact =>
                contact.name.toLowerCase().includes(query.toLowerCase()) ||
                contact.email.toLowerCase().includes(query.toLowerCase()) ||
                contact.phone.toLowerCase().includes(query.toLowerCase())
            )
        );
      });
    }

    return leads;
  }

    async createLead(createLeadDto: CreateLeadDto): Promise<Lead> {
        const lead = this.leadRepository.create(createLeadDto);
        return this.leadRepository.save(lead);
    }

    async createContact(createContactDto: CreateContactDto): Promise<Contact> {
        const contact = this.contactRepository.create(createContactDto);
        return this.contactRepository.save(contact);
    }
}
