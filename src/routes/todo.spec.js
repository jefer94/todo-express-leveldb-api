import 'regenerator-runtime/runtime'
import { should } from 'chai'
import { addTodo, listTodo, removeTodo } from './todo'
import { get, put, mockDb } from '../libs/db'
import db from '../mocks/db'
import req from '../mocks/req'
import res from '../mocks/res'
import next from '../mocks/next'

should()

let id = 0

function todo(name) {
  return {
    id: id++,
    name
  }
}

describe('routes/todo', () => {
  describe('GET', () => {
    before(() => {
      mockDb(db)
    })

    it('return 200 but empty if not exist todo', async () => {
      const request = req()
      const response = res()
      const user = {
        id: 1,
        user: 'lacey',
        pass: 'token'
      }

      request.user = user

      await put(`ToDo${user.id}`, '[]')

      await listTodo(request, response, next)

      response.mockStatus.should.be.equal(200)
      response.mockBody.length.should.be.equal(0)
    })

    it('return 200 but empty if not exist user', async () => {
      const request = req()
      const response = res()
      const user = {
        id: 0
      }

      request.user = user

      await listTodo(request, response, next)

      response.mockStatus.should.be.equal(200)
      response.mockBody.length.should.be.equal(0)
    })

    it('return 200 and array of todo if exist', async () => {
      const request = req()
      const response = res()
      const user = {
        id: 1,
        user: 'lacey',
        pass: 'token'
      }

      const list = [
        todo('Tristana'),
        todo('Senna'),
        todo('Miss Fortune')
      ]

      request.user = user

      await put(`ToDo${user.id}`, JSON.stringify(list))

      await listTodo(request, response, next)

      response.mockStatus.should.be.equal(200)
      response.mockBody.length.should.be.equal(3)

      response.mockBody[0].id.should.be.equal(0)
      response.mockBody[0].name.should.be.equal('Tristana')

      response.mockBody[1].id.should.be.equal(1)
      response.mockBody[1].name.should.be.equal('Senna')

      response.mockBody[2].id.should.be.equal(2)
      response.mockBody[2].name.should.be.equal('Miss Fortune')
    })
  })

  describe('POST', () => {
    before(() => {
      mockDb(db)
    })

    it('return 201, create todo and return id', async () => {
      const request = req()
      const response = res()
      const user = {
        id: 2,
        user: 'FlyingSpaghettiMonster',
        pass: 'token'
      }

      request.user = user
      request.body = {
        name: 'choco'
      }

      await put(`ToDo${user.id}`, '[]')

      await addTodo(request, response, next)

      response.mockStatus.should.be.equal(201)
      response.mockBody.should.be.equal('0')
    })

    it('return 401 if name is not provide', async () => {
      const request = req()
      const response = res()
      const user = {
        id: 2,
        user: 'FlyingSpaghettiMonster',
        pass: 'token'
      }

      request.user = user

      await put(`ToDo${user.id}`, '[]')

      await addTodo(request, response, next)

      response.mockStatus.should.be.equal(401)
      response.mockBody.should.be.equal('')
    })
  })

  describe('DELETE', () => {
    before(() => {
      mockDb(db)
    })

    it('return 204 if key exist', async () => {
      const request = req()
      const response = res()
      const user = {
        id: 0
      }

      const list = [
        todo('Tristana')
      ]

      request.user = user
      request.params = {
        id: 3
      }

      await put(`ToDo${user.id}`, JSON.stringify(list))

      await removeTodo(request, response, next)

      response.mockStatus.should.be.equal(204)
      response.mockBody.should.be.equal('')

      let state = 0
      let result
      try {
        result = JSON.parse(await get(`ToDo${user.id}`))
      }
      catch (e) {
        state = 1
      }

      state.should.be.equal(0)
      result.length.should.be.equal(0)
    })

    it('return 401 if key not exist', async () => {
      const request = req()
      const response = res()
      const user = {
        id: 0
      }

      request.user = user

      await removeTodo(request, response, next)

      response.mockStatus.should.be.equal(401)
      response.mockBody.should.be.equal('')
    })
  })
})
