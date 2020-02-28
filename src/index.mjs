import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser  from 'body-parser'
import { listTodo, addTodo, removeTodo, login, signup, index } from './routes/index.mjs'
import { jwtMiddleware } from './libs/jwt.mjs'
import process from 'process'

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
   .use(morgan('combined'))
   // .use(helmet())
   // .use(express.json())
   .use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: false }))
   
   .use(jwtMiddleware)
   .get('/todo', listTodo)
   .post('/todo', addTodo)
   .delete('/todo', removeTodo)
   .post('/login', login)
   .post('/signup', signup)
   .get('/', index)
   .listen(port)