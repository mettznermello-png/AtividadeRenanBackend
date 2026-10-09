import database from '../config/datebase.js'

class User {
    constructor() {
        this.model = database.db.define("user", {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: database.db.Sequelize.INTEGER


            },
            name: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: database.db.Sequelize.STRING,
                allowNull: false,
                unique: true
            }
        })
    }
}

export default new User().model