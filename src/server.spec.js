// import 'regenerator-runtime/runtime'
// import { should, assert } from 'chai'
// import net from 'net'
// import axios from 'axios'
// import server from './server'
// import { mockDb } from './libs/db'
// import db from './mocks/db'

// should()

// axios.defaults.validateStatus = function () {
//   return true
// }

// const url = 'http://localhost:5000'
// const get = 'GET'
// const post = 'POST'
// const del = 'DELETE'
// let token

// describe('Integration Testing', () => {
//   before(async () => {
//     mockDb(db)

//     const isUsed = !await isPortUsed(5000)
//     if (isUsed) {
//       server(isUsed)
//       const response = await axios.post(`${url}/signup`, {
//         user: 'oreo',
//         pass: 'Nutella850!'
//       })
//       token = response.data
//     }
//   })
//   describe('Index', () => {
//     it('GET', async () => {
//       const res = await axios.get(`${url}/`, {
//         headers: {
//           authorization: `Bearer ${token}`
//         }
//       })
//       assert.equal(res.status, 200)
//       assert.typeOf(res.data, 'object')

//       assert.lengthOf(res.data['/'], 1)
//       assert.equal(res.data['/'][0], get)

//       assert.lengthOf(res.data['/todo'], 3)
//       assert.equal(res.data['/todo'][0], get)
//       assert.equal(res.data['/todo'][1], post)
//       assert.equal(res.data['/todo'][2], del)

//       assert.lengthOf(res.data['/login'], 1)
//       assert.equal(res.data['/login'][0], post)

//       assert.lengthOf(res.data['/signup'], 1)
//       assert.equal(res.data['/signup'][0], post)
//     })
//   })

//   describe('Todo', () => {
//     describe('GET', () => {
//     //   it('without auth, response 401 with []', async () => {
//     //     chai.request(url)
//     //       .get('/todo')
//     //       .end((err, res) => {
//     //         console.log(res.status, res.body)
//     //         res.should.have.status(401)
//     //         res.body.should.be.a('array')
//     //         res.body.length.should.be.equal(0)
//     //       });
//     //   })

//       it('with auth, response 200 with []', async () => {
//         const res = await axios.get(`${url}/todo`, {
//           headers: {
//             authorization: `Bearer ${token}`
//           }
//         })

//         assert.equal(res.status, 200)
//         assert.equal(res.data instanceof Array, true)
//         assert.lengthOf(res.data, 0)
//       })
//     })
//   })
// })

// function isPortUsed(port) {
//   return new Promise((resolve) => {
//     const serverHttp = net.createServer()
//     serverHttp.once('error', (err) => {
//       if (err.code === 'EADDRINUSE') resolve(true)
//     })

//     serverHttp.once('listening', () => {
//       serverHttp.close()
//       resolve(false)
//     })

//     serverHttp.listen(port)
//   })
// }
