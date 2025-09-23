import express from 'express';
const app = express();

app.use(express.json());

const users = [];

// MÉTODO => GET, POST, PUT/PATCH, DELETE
// NAME => / - sempre no plural
// CallBack fucntions => Onde executamos os códigos de back-end

app.post("/users",  (req, res) => { // Cria uma rota que reponde em requisições POST
    const body = req.body // Contém os dados enviados no corpo da requisição (feito pelo expres.json())
    users.push(body) // Salva os dados no array
    res.status(201).send('Usuário criado com sucesso!!') // Retorna uma msg com 201, de usuário criado
});

app.get("/users", (req, res) => { // Rota para requisição GET
    res.send({message: 'Esses são os usuários', users}) // Envia uma resposta em formato JSON
})


app.listen(3000, () => { // Inicia o servidor na porta 3000 atraves de 'http://localhost:3000'
    console.log("Server is runnig on port 3000")
})