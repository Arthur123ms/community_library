// MÉTODO => GET, POST, PUT/PATCH, DELETE
// NAME => / - sempre no plural
// CallBack fucntions => Onde executamos os códigos de back-end


import express from 'express';
import userRouters from './src/routes/user.routes.js';
import booksRouter from './src/routes/books.routes.js'
import loanRouter from "./src/routes/loans.routes.js"
import "dotenv/config"
import "./src/services/cron.service.js"

const app = express();

const port = process.env.PORT || 3000

app.use(express.json());
app.use(userRouters)
app.use(booksRouter)
app.use(loanRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

