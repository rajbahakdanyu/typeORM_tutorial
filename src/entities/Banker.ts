import {
    Entity,
    Column,
    ManyToMany,
    JoinTable
} from 'typeorm'
import { Client } from './Client';

import { Person } from './utils/Person'

@Entity('banker')
export class Banker extends Person {
    @Column({
        unique: true,
        length: 10
    })
    employee_number: string

    @ManyToMany((type) => Client, {
        cascade: true,
    })

    @JoinTable({
        name: 'bankers_clients',
        joinColumn: {
            name: 'banker',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'client',
            referencedColumnName: 'id',
        },
    })
    clients: Client[];
}