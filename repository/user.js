import User from '../model/user.js'

class RepositoryUser {

    async Buscar() {
        return User.findAll()
    }
    async Detalhes(id) {
        return User.findByPk(id)
    }
    async BuscarEmail(id) {
        return User.findOne({ where: { email } })
    }
    async Criar(name, email, password) {
        User.create({ name, email, password })
    }
    async Alterar(id, name, email, password) {
        const user = await User.findByPk(id)

        if (!user) {
            throw new Error("Usuario não encontrado")
        }
        user.name = name || user.name
        user.email = email || user.email
        user.password = password || user.password

        await user.save()
    }
    async Deletar(id) {
        const user = await User.findByPk(id)

        if (!user) {
            throw new Error("Usuario não encontrado")
        }
        await user.destroy()
    }


}

export default new RepositoryUser()