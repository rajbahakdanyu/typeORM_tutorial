import {
    Entity,
    Column,
    ManyToMany,
    OneToMany
} from 'typeorm'
import { Banker } from './Banker'
import { Transactions } from './Transaction'

import { Person } from './utils/Person'

@Entity('client')
export class Client extends Person {
    @Column({
        type: "numeric"
    })
    balance: number

    @Column({
        default: true
    })
    is_active: boolean

    @Column({
        type: 'simple-json',
        nullable: true
    })
    addition_info: {
        age: number
        address: string
    }

    @Column({
        type: 'simple-array',
        default: []
    })
    family_members: string[]

    @ManyToMany((type) => Banker, {
        cascade: true,
    })
    bankers: Banker[];

    @OneToMany(
        () => Transactions,
        (transaction) => transaction.client
    )
    transactions: Transaction[];
}