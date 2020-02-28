import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { get, put } from '../libs/db.mjs'
import { saltRounds, secret } from '../libs/jwt.mjs'

const { compare, hash } = bcrypt

export const loginPath = '/login'
export const signupPath = '/signup'

export async function login(req, res) {
  const {user, pass} = req.body
  let status = 401
  let response = ''
  if (user && pass) {
    try {
      const current = JSON.parse(await get(`User-${user}`))

      if (current.id && current.pass && await compare(pass, current.pass)) {
        current.now = Date.now()
        res.status(200).send(jwt.sign(current, secret, { expiresIn: '1d' }))
        return
      }
    }
    catch(e) { }

    res.status(401).send('')
  }
  else {
    res.status(500).send('')
  }
}

function strongPassword(pass) {
  return /\d/.test(pass) &&
         /[a-z]/.test(pass) &&
         /[A-Z]/.test(pass) &&
         /\W/.test(pass) &&
         pass.length > 7
}

export async function signup(req, res) {
  const {user, pass} = req.body
  let status = 401
  let response = ''

  let currentUser
  let id

  if (user && pass && strongPassword(pass)) {
    try {
      currentUser = (await get(`User-${user}`)).toString()
    }
    catch(e) {
      currentUser = false
    }

    try {
      id = +((await get('UserId')).toString()) + 1
    }
    catch(e) {
      id = 0
    }

    if (!currentUser) {
      try {
        const data = {id, user, pass: await hash(pass, saltRounds)}
        await put('UserId', id.toString())
        await put(`User-${user}`, JSON.stringify(data))
        data.now = Date.now()
        status = 200
        response = jwt.sign(data, secret, { expiresIn: '1d' })
      }
      catch(e) {
        console.error('error', e)
        status = 500
      }
    }
  }
  
  res.status(status).send(response)
}