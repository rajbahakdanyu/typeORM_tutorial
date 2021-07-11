import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm'

export enum TransactionType {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw',
}

@Entity('transactions')
export class Transactions extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'enum',
        enum: TransactionType,
    })
    type: string;

    @Column({
        type: 'numeric',
    })
    amount: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}