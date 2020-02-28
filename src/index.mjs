import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser  from 'body-parser'
import { listTodo, addTodo, removeTodo, login, signup, index, loginPath, signupPath, todoPath, indexPath } from './routes/index.mjs'
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
   .get(todoPath, listTodo)
   .post(todoPath, addTodo)
   .delete(todoPath + '/:id', removeTodo)
   .post(loginPath, login)
   .post(signupPath, signup)
   .get(indexPath, index)
   .listen(port)