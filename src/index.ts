import { createConnection } from 'typeorm'

import { Client } from './entities/Client'
import { Banker } from './entities/Banker'
import { Transaction } from './entities/Transaction'

const main = async () => {
    try {
        await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "password",
            database: "typeORM",
            entities: [Client, Banker, Transaction],
            synchronize: true
        })

        console.log("Successfully connected to Postgres")
    } catch (e) {
        console.error(e)
        throw new Error("Unable to connect to DB")
    }
}

main()