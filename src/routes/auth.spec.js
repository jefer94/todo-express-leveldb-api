import 'regenerator-runtime/runtime'
import { should } from 'chai'
import { login, signup } from './auth'
import { mockDb } from '../libs/db'

import db from '../mocks/db'
import req from '../mocks/req'
import res from '../mocks/res'
import next from '../mocks/next'

should()

describe('routes/auth', () => {
  describe('login', () => {
    describe('POST', () => {
      before(() => {
        mockDb(db)
      })

      it('return 401 if user and pass not match', async () => {
        const request = req()
        const response = res()
        const user = {
          user: 'lacey',
          pass: 'token'
        }

        request.body = user

        await login(request, response, next)

        response.mockStatus.should.be.equal(401)
        response.mockBody.should.be.equal('')
      })

      it('return 500 if user not exist', async () => {
        const request = req()
        const response = res()
        const user = {
          pass: 'token'
        }

        request.body = user

        await login(request, response, next)

        response.mockStatus.should.be.equal(500)
        response.mockBody.should.be.equal('')
      })

      it('return 500 if pass not exist', async () => {
        const request = req()
        const response = res()
        const user = {
          user: 'lacey'
        }

        request.body = user

        await login(request, response, next)

        response.mockStatus.should.be.equal(500)
        response.mockBody.should.be.equal('')
      })

      it('return 200 if user and pass are valid', async () => {
        const signupRequest = req()
        const signupResponse = res()
        const request = req()
        const response = res()
        const user = {
          user: 'LaceyMosley',
          pass: 'Count11%2'
        }

        signupRequest.body = { ...user }

        await signup(signupRequest, signupResponse, next)

        request.body = { ...user }

        await login(request, response, next)

        response.mockStatus.should.be.equal(200)
        response.mockBody.length.should.not.be.equal(0)
      })
    })
  })

  describe('signup', () => {
    describe('POST', () => {
      before(() => {
        mockDb(db)
      })

      it('return 200 if user and pass are valid', async () => {
        const request = req()
        const response = res()
        const user = {
          user: 'lacey',
          pass: 'Count11%'
        }

        request.body = user

        await signup(request, response, next)

        response.mockStatus.should.be.equal(200)
        response.mockBody.length.should.not.be.equal(0)
      })

      it('return 401 if user not exist', async () => {
        const request = req()
        const response = res()
        const user = {
          pass: 'token'
        }

        request.body = user

        await signup(request, response, next)

        response.mockStatus.should.be.equal(401)
        response.mockBody.should.be.equal('')
      })

      it('return 401 if pass not exist', async () => {
        const request = req()
        const response = res()
        const user = {
          user: 'lacey'
        }

        request.body = user

        await signup(request, response, next)

        response.mockStatus.should.be.equal(401)
        response.mockBody.should.be.equal('')
      })

      it('return 401 if pass is full numbers', async () => {
        const request = req()
        const response = res()
        const user = {
          user: 'lacey',
          pass: '1234567890'
        }

        request.body = user

        await signup(request, response, next)

        response.mockStatus.should.be.equal(401)
        response.mockBody.should.be.equal('')
      })

      it('return 401 if pass is full lowercase letters', async () => {
        const request = req()
        const response = res()
        const user = {
          user: 'lacey',
          pass: 'abcdefghijk'
        }

        request.body = user

        await signup(request, response, next)

        response.mockStatus.should.be.equal(401)
        response.mockBody.should.be.equal('')
      })

      it('return 401 if pass is full uppercase letters', async () => {
        const request = req()
        const response = res()
        const user = {
          user: 'lacey',
          pass: 'ABCDEFGHIJK'
        }

        request.body = user

        await signup(request, response, next)

        response.mockStatus.should.be.equal(401)
        response.mockBody.should.be.equal('')
      })

      it('return 401 if pass is full tokens', async () => {
        const request = req()
        const response = res()
        const user = {
          user: 'lacey',
          pass: '!@#$%^&*'
        }

        request.body = user

        await signup(request, response, next)

        response.mockStatus.should.be.equal(401)
        response.mockBody.should.be.equal('')
      })

      it('return 401 if pass length is less that 7', async () => {
        const request = req()
        const response = res()
        const user = {
          user: 'lacey',
          pass: 'Count%1'
        }

        request.body = user

        await signup(request, response, next)

        response.mockStatus.should.be.equal(401)
        response.mockBody.should.be.equal('')
      })

      it('return 401 if pass missing lowercase', async () => {
        const request = req()
        const response = res()
        const user = {
          user: 'lacey',
          pass: 'COUNT%1'
        }

        request.body = user

        await signup(request, response, next)

        response.mockStatus.should.be.equal(401)
        response.mockBody.should.be.equal('')
      })

      it('return 401 if pass missing uppercase', async () => {
        const request = req()
        const response = res()
        const user = {
          user: 'lacey',
          pass: 'count%1'
        }

        request.body = user

        await signup(request, response, next)

        response.mockStatus.should.be.equal(401)
        response.mockBody.should.be.equal('')
      })

      it('return 401 if pass missing tokens', async () => {
        const request = req()
        const response = res()
        const user = {
          user: 'lacey',
          pass: 'Count11'
        }

        request.body = user

        await signup(request, response, next)

        response.mockStatus.should.be.equal(401)
        response.mockBody.should.be.equal('')
      })

      it('return 401 if pass missing numbers', async () => {
        const request = req()
        const response = res()
        const user = {
          user: 'lacey',
          pass: 'Count%%'
        }

        request.body = user

        await signup(request, response, next)

        response.mockStatus.should.be.equal(401)
        response.mockBody.should.be.equal('')
      })
    })
  })
})
