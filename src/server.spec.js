import 'regenerator-runtime/runtime'
import { should, assert } from 'chai'
import net from 'net'
import axios from 'axios'
import server, { close, disableLog } from './server'
import { mockDb } from './libs/db'
import db, { resetStorage } from './mocks/db'

should()

axios.defaults.validateStatus = () => true

const user = {
  user: 'oreo',
  pass: 'Nutella850!'
}

const url = 'http://localhost:5000'
const get = 'GET'
const post = 'POST'
const del = 'DELETE'
let token

describe('Integration Testing', () => {
  before(async () => {
    disableLog()
    resetStorage()
    mockDb(db)

    const isUsed = !await isPortUsed(5000)
    if (isUsed) server(isUsed)
  })
  after(() => close())
  describe('Index', () => {
    describe('GET', () => {
      it('data is correct', async () => {
        const res = await axios.get(`${url}/`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        assert.equal(res.status, 200)
        assert.typeOf(res.data, 'object')

        assert.lengthOf(res.data['/'], 1)
        assert.equal(res.data['/'][0], get)

        assert.lengthOf(res.data['/todo'], 3)
        assert.equal(res.data['/todo'][0], get)
        assert.equal(res.data['/todo'][1], post)
        assert.equal(res.data['/todo'][2], del)

        assert.lengthOf(res.data['/login'], 1)
        assert.equal(res.data['/login'][0], post)

        assert.lengthOf(res.data['/signup'], 1)
        assert.equal(res.data['/signup'][0], post)
      })
    })
  })

  describe('Todo', () => {
    describe('GET', () => {
      it('without auth, response 401 with []', async () => {
        const res = await axios.get(`${url}/todo`)

        assert.equal(res.status, 401)
        assert.equal(res.data instanceof Array, true)
        assert.lengthOf(res.data, 0)
      })

      it('with auth, response 200 with []', async () => {
        const res = await axios.get(`${url}/todo`, {
          headers: {
            authorization: `Bearer ${await getToken()}`
          }
        })

        assert.equal(res.status, 200)
        assert.equal(res.data instanceof Array, true)
        assert.lengthOf(res.data, 0)
      })
    })

    describe('POST', () => {
      it('without name, response 401 with []', async () => {
        const res = await axios.post(`${url}/todo`)

        assert.equal(res.status, 401)
        assert.equal(res.data instanceof Array, true)
        assert.lengthOf(res.data, 0)
      })

      it('with name, response 200 with []', async () => {
        const res = await axios.post(`${url}/todo`, { name: 'Tristana' }, {
          headers: {
            authorization: `Bearer ${await getToken()}`
          }
        })

        assert.equal(res.status, 201)
        assert.typeOf(res.data, 'number')
        assert.equal(res.data, 0)
      })
    })

    describe('DELETE', () => {
      it('without token, response 401 with []', async () => {
        const res = await axios.delete(`${url}/todo/0`)

        assert.equal(res.status, 401)
        assert.equal(res.data instanceof Array, true)
        assert.lengthOf(res.data, 0)
      })

      it('with bad id and good token, response 204 with null', async () => {
        const res = await axios.delete(`${url}/todo/110`, {
          headers: {
            authorization: `Bearer ${await getToken()}`
          }
        })

        assert.equal(res.status, 204)
        assert.equal(res.data, '')
      })

      it('with id and token, response 204 with null', async () => {
        const res1 = await axios.post(`${url}/todo`, { name: 'Super Tristana' }, {
          headers: {
            authorization: `Bearer ${await getToken()}`
          }
        })

        assert.equal(res1.status, 201)
        assert.typeOf(res1.data, 'number')
        assert.equal(res1.data, 1)


        const res2 = await axios.get(`${url}/todo`, {
          headers: {
            authorization: `Bearer ${await getToken()}`
          }
        })

        assert.equal(res2.status, 200)
        assert.equal(res2.data instanceof Array, true)
        assert.lengthOf(res2.data, 2)

        assert.equal(res2.data[1].id, 1)
        assert.equal(res2.data[1].name, 'Super Tristana')

        const res3 = await axios.delete(`${url}/todo/1`, {
          headers: {
            authorization: `Bearer ${await getToken()}`
          }
        })

        assert.equal(res3.status, 204)
        assert.typeOf(res3.data, 'string')
        assert.equal(res3.data, '')

        const res4 = await axios.get(`${url}/todo`, {
          headers: {
            authorization: `Bearer ${await getToken()}`
          }
        })

        assert.equal(res4.status, 200)
        assert.equal(res4.data instanceof Array, true)
        assert.lengthOf(res4.data, 1)
      })
    })
  })

  describe('Login', () => {
    describe('POST', () => {
      it('without user and pass, return 500', async () => {
        const res = await axios.post(`${url}/login`, {})

        assert.equal(res.status, 500)
        assert.equal(res.data, '')
      })

      it('bad auth data return 401', async () => {
        const res = await axios.post(`${url}/login`, { user: 'potato', pass: 'dark' })

        assert.equal(res.status, 401)
        assert.equal(res.data, '')
      })

      it('good auth data return 200 and token', async () => {
        await getToken()
        const res = await axios.post(`${url}/login`, user)

        assert.equal(res.status, 200)
        assert.typeOf(res.data, 'string')
        assert.equal(res.data.length > 0, true)
      })
    })
  })

  describe('signup', () => {
    describe('POST', () => {
      it('without user and pass, return 401', async () => {
        const res = await axios.post(`${url}/signup`, {})

        assert.equal(res.status, 401)
        assert.equal(res.data, '')
      })

      it('bad auth data return 401', async () => {
        const res = await axios.post(`${url}/signup`, { user: 'potato', pass: 'dark' })

        assert.equal(res.status, 401)
        assert.equal(res.data, '')
      })

      it('good auth data return 200 and token', async () => {
        const res = await axios.post(`${url}/signup`, { user: 'popato', pass: 'Dark+++101' })

        assert.equal(res.status, 200)
        assert.typeOf(res.data, 'string')
        assert.equal(res.data.length > 0, true)
      })
    })
  })
})

async function getToken() {
  let response

  response = await axios.post(`${url}/signup`, user)

  if (response.status === 401) response = await axios.post(`${url}/login`, user)

  if (response.data) token = response.data
  return response.data
}

function isPortUsed(port) {
  return new Promise((resolve) => {
    const serverHttp = net.createServer()
    serverHttp.once('error', (err) => {
      if (err.code === 'EADDRINUSE') resolve(true)
    })

    serverHttp.once('listening', () => {
      serverHttp.close()
      resolve(false)
    })

    serverHttp.listen(port)
  })
}
