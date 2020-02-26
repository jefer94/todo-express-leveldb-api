import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser  from 'body-parser'
import { list, add, remove, login, signup, jwtMiddleware } from './routes.mjs'
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
   .get('/', list)
   .post('/', add)
   .delete('/', remove)
   .post('/login', login)
   .post('/signup', signup)
   .listen(port)