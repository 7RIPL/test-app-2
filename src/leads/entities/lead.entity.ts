import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable, OneToMany } from 'typeorm';
import { Contact } from './contact.entity';

@Entity()
export class Lead {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    budget: number;

    @Column({ nullable: true })
    status: string;

    @Column({ nullable: true })
    responsible: string;

    @Column({ type: 'timestamp with time zone', default: () => 'NOW()' })
    createdAt: Date;

    @OneToMany(() => Contact, contact => contact.lead, { cascade: true })
    @JoinTable()
    contacts: Contact[];
}
