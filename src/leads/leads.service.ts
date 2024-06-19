import { Injectable } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lead } from './entities/lead.entity';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-lead.dto';


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

      if (query && query.length >= 3) {
          leads = leads.filter(lead => {
              if (lead.name.toLowerCase().includes(query.toLowerCase())) {
                  return true;
              }

              if (lead.contacts && lead.contacts.length > 0) {
                  const foundInContacts = lead.contacts.some(contact =>
                      contact.name.toLowerCase().includes(query.toLowerCase()) ||
                      contact.email.toLowerCase().includes(query.toLowerCase()) ||
                      contact.phone.toLowerCase().includes(query.toLowerCase())
                  );

                  if (foundInContacts) {
                      return true;
                  }
              }
              return false;
          });
      }
      return leads;
  }

    async create(createLeadDto: CreateLeadDto, createContactDto: CreateContactDto): Promise<Lead> {
        const lead = new Lead();
        lead.name = createLeadDto.name;
        lead.budget = parseFloat(createLeadDto.budget.toString().replace(',', '.')) || 0;
        lead.status = createLeadDto.status;
        lead.responsible = createLeadDto.responsible;

        lead.contacts = createLeadDto.contacts.map((contactDto: CreateContactDto) => {
            const contact = new Contact();
            contact.name = contactDto.name;
            contact.email = contactDto.email;
            contact.phone = contactDto.phone;
            return contact;
        });

        return this.leadRepository.save(lead);
    }
}
