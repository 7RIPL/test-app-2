import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import { Lead } from './lead.entity';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    phone: string;

    @ManyToOne(() => Lead, lead => lead.contacts)
    @JoinColumn()
    lead: Lead;
}