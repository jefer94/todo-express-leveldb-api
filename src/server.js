import 'regenerator-runtime/runtime'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import process from 'process'
import { config } from 'dotenv'
import { listTodo, addTodo, removeTodo, login, signup, index, loginPath, signupPath, todoPath, indexPath } from './routes'
import jwt from './libs/jwt'
import http from 'http'

config()

const app = express()
const port = process.env.PORT || 5000
let log = true
let server

export function close() {
  if (server)
    server.close()
}

export function disableLog() {
  log = false
}

// prevent EADDRINUSE in integration testing
export default function (run = true) {
  if (run) {
    if (log) app.use(morgan('combined'))
    
    app.use(cors())
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

      server = http.createServer(app)
      server.listen(port)
  }

}
