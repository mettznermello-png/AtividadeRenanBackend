import ServiceUser from '../service/user.js'

class ControllerUser {

    async Buscar(_, res) {
        try {
            const users = await ServiceUser.Buscar()
            res.status(200).send({ users })
        } catch (error) {
            res.status(500).send({ message: error.message })

        }
    }
    async Detalhes(req, res) {
        try {
            //session === usuario logado
            const id = req.session.id
            const users = await ServiceUser.Detalhes(id)
            res.status(200).send({ users })
        } catch (error) {
            res.status(500).send({ message: error.message })

        }
    }
    async Criar(req, res) {
        try {
            const { name, email, password } = req.body

            await ServiceUser.Criar(name, email, password)

            res.status(200).send({ message: "Usuario criado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })

        }
    }
    async Alterar(req, res) {
        try {
            const id = req.session.id
            const { name, email, password } = req.body
            const users = await ServiceUser.Alterar()
            res.status(200).send({ message: "Usuario alterado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })

        }
    }
    async Deletar(req, res) {
        try {

            const id = req.session.id

            await ServiceUser.Deletar(id)

            res.status(204).send({ message: "Usuario delatado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })

        }
    }
    async Login(req, res) {
        try {
            const { email, password } = req.body
            const token = await ServiceUser.Login(email, password)
            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ message: error.message })

        }
    }

}

export default new ControllerUser()