import RepositoryUser from '../repository/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET = "batata123"
const SALT = 12

class ServiceUser {

    async Buscar() {
        return RepositoryUser.Buscar()
    }
    async Detalhes(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        return RepositoryUser.Detalhes(id)
    }
    async Criar(nome, email, password) {
        if (!nome || !email || !password) {
            throw new Error("Favor informar todos os paramêtros")
        }
        const cryptPass = await bcrypt.hash(password, SALT)
        await RepositoryUser.Criar(nome, email, cryptPass)
    }
    async Alterar(id, nome, email, password) {
        if (!id || !nome || !email || !password) {
            throw new Error("Favor informar todos os paramêtros")
        }
        const cryptPass = !password
            ? undefined
            : await bcrypt.hash(password, SALT)

        await RepositoryUser.Criar(id, nome, email, cryptPass)
    }
    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }
        await RepositoryUser.Criar(id)
    }
    async Login(email, password) {
        if (!email || !password) {
            throw new Error("Email ou senha invalidos")
        }
        
        const user = await RepositoryUser.BuscarEmail(email)

        if(!user) {
            throw new Error("Email ou senha invalidos")
        }

        if(!(await bcrypt.compare(String(password), user.password))) {
            throw new Error ("Email ou senha invalidos")
        }

        return jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            SECRET,
            {
                expiresIn: 60 * 60
            }
        )
    }

}

export default new ServiceUser()