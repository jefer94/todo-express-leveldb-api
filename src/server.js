import 'regenerator-runtime/runtime'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import process from 'process'
import { listTodo, addTodo, removeTodo, login, signup, index, loginPath, signupPath, todoPath, indexPath } from './routes'
import jwt from './libs/jwt'

const app = express()
const port = process.env.PORT || 5000

// prevent EADDRINUSE in integration testing
export default function (run = true) {
  if (run) app.use(cors())
    .use(morgan('combined'))
    .use(helmet())
  // .use(express.json())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(jwt)
    .get(todoPath, listTodo)
    .post(todoPath, addTodo)
    .delete(`${todoPath}/:id`, removeTodo)
    .post(loginPath, login)
    .post(signupPath, signup)
    .get(indexPath, index)
    .listen(port)
}
