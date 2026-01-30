import express from 'express';

const app = express()
// Por padrão o express não usa json, então precisamos fazer ele usar:
app.use(express.json())

const users = []

app.post('/users', (req, res) =>{

    users.push(req.body)

    res.status(201).json(req.body)

})

// Quando eu acessar o meu servidor no /users no Get: devolver usuários.
// req = requisição  /  res = resposta
app.get('/users', (req, res) => {

    // o método .send() é usado para enviar uma resposta HTTP ao cliente (por exemplo, ao navegador ou a um app que faz requisições para sua API).
    res.status(200).json(users)

})

// O método listen() é usado para iniciar o servidor web e fazer com que ele comece a escutar requisições HTTP em uma porta específica.
app.listen(3000)




// Eu posso ter várias Rotas no endereço /users , só que cada uma dependendo do método que eu usar vai fazer uma coisa diferente.