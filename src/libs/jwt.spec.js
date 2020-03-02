import 'regenerator-runtime/runtime'
import { should } from 'chai'
import jwt, { sign } from './jwt'
import req from '../mocks/req'
import res from '../mocks/res'
import next from '../mocks/next'

should()

process.env.SECRET = '.`5H+C8ewL~&wat"z<-A.eHmW2M}./m)w;zbh\'aBZwshA>!M;h&dyBhnaJK{_"Y'
process.env.SALT_ROUNDS = 10

describe('libs/jwt', () => {
  describe('default', () => {
    it('without authorization header return 401', async () => {
      const request = req()
      const response = res()

      jwt(request, response, next)

      response.mockStatus.should.be.equal(401)
    })

    it('with bad authorization header return 401', async () => {
      const request = req()
      const response = res()

      response.mockStatus = 200
      request.headers.authorization = 'asdasdasdsadasdadsdasdsadsa'

      jwt(request, response, next)

      response.mockStatus.should.be.equal(401)
    })

    it('with authorization header return 200', async () => {
      const request = req()
      const response = res()
      const token = sign({
        id: 1,
        user: 'Senna',
        pass: 'unread'
      })

      // response.mockStatus = 200
      request.headers.authorization = `Bearer ${token}`

      jwt(request, response, next)

      response.mockStatus.should.be.equal(200)
    })
  })
})
