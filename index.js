// MÉTODO => GET, POST, PUT/PATCH, DELETE
// NAME => / - sempre no plural
// CallBack fucntions => Onde executamos os códigos de back-end


import express from 'express';
import userRouters from './src/routes/user.routes.js';


const app = express();



app.use(express.json());
app.use(userRouters)

app.listen(3000, () => {
    console.log('Server is runing on portr 3000')
})

