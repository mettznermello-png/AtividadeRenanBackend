import express from 'express'
import database from './config/datebase.js'
import router from './router/user.js'

const app = express()
app.use(express.json())

app.use('/api/v1/user', router)

database.db.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log("Averiguando possivel resenha")
        })
    })
    .catch((e) => {
        console.log(e)
    })
