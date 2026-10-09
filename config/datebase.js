import { Sequelize } from "sequelize";

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            database: "jogos",
            dialect: "mysql",
            host: "localhost",
            username: "root",
            password: ""

        })
    }
}

export default new Database()