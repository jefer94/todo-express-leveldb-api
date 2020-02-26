import { get, put } from './db.mjs'

export async function list(req, res) {
  try {
    res.json(JSON.parse((await get(`ToDo${req.user.id}`)).toString()))
  }
  catch(e) {
    res.json([])
  }
}

export async function add(req, res) {
  const {name} = req.body
  let storage
  let id
  if (name) {
    try {
      storage = JSON.parse((await get(`ToDo${req.user.id}`)).toString()) 
    }
    catch(e) {
      storage = []
    }

    try {
      id = +((await get('ToDoId')).toString()) + 1
    }
    catch(e) {
      id = 0
    }

    try {
      await put('ToDoId', id.toString())
      await put(`ToDo${req.user.id}`, JSON.stringify([].concat(storage, {id, name})))
      res.status(200).send(id.toString())
    }
    catch(e) {
      res.status(500).send('')
    }
  }
  else {
    res.status(401).send('')
  }
}

export async function remove(req, res) {
  const {id} = req.body
  let storage

  if (typeof +id == 'number') {
    try {
      storage = JSON.parse((await get(`ToDo${req.user.id}`)).toString()) 
    }
    catch(e) {
      storage = []
    }

    try {
      await put(`ToDo${req.user.id}`, JSON.stringify(storage.filter(v => v.id !== +id)))
      res.status(204).send('')
    }
    catch(e) {
      res.status(500).send('')
    }
  }
  else
    res.status(401).send('')
}

export * from './jwt.mjs'