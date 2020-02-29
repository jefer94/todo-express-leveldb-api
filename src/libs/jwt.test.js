import 'regenerator-runtime/runtime'
import jwt, { sign } from './jwt'
import req from '../mocks/req'
import res from '../mocks/res'
import next from '../mocks/next'

process.env.SECRET = '.\`5H+C8ewL~&wat"z<-A.eHmW2M}./m)w;zbh\'aBZwshA>!M;h&dyBhnaJK{_"Y'
process.env.SALT_ROUNDS = 10

test('without authorization header return 401', async () => {
  const request = req()
  const response = res()

  await jwt(request, response, next)

  expect(response.__status).toEqual(401)
})

test('with bad authorization header return 401', async () => {
  const request = req()
  const response = res()

  response.__status = 200
  request.headers.authorization = 'asdasdasdsadasdadsdasdsadsa'

  await jwt(request, response, next)

  expect(response.__status).toEqual(401)
})

test('with authorization header return 200', async () => {
  const request = req()
  const response = res()
  const token = sign({
    id: 1,
    user: 'Senna',
    pass: 'unread'
  })

  response.__status = 200
  request.headers.authorization = `Bearer ${token}`

  await jwt(request, response, next)

  expect(response.__status).toEqual(200)
})