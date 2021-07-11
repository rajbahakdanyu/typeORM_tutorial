import { createConnection } from 'typeorm'

const main = async () => {
    try {
        const connection = await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "password",
            database: "typeORM"
        })

        console.log("Successfully connected to Postgres")
    } catch (e) {
        console.error(e)
        throw new Error("Unable to connect to DB")
    }
}

main()