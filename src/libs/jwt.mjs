import jwt from 'jsonwebtoken'

export const secret = '.\`5H+C8ewL~&wat"z<-A.eHmW2M}./m)w;zbh\'aBZwshA>!M;h&dyBhnaJK{_"Y'
export const saltRounds = 10


function isNotRestricted(url) {
  return !(url === '/login' ||
           url === '/signup')
}

export function jwtMiddleware(req, res, next) {
  req.user = { id: 0 }
  const notRestricted = isNotRestricted(req.originalUrl)
  if (notRestricted) {
    if (!req.headers.authorization && !/^Bearer /.test(req.headers.authorization))
      return res.status(401).send([])

    else {
      try {
        const data = jwt.verify(req.headers.authorization.replace('Bearer ', ''), secret)
        if (data) {
          req.user = data
          next()
          return
        }
      }
      catch (e) {
        next()
        return
      }
    }
  }
  next()
  // return res.status(401).send([])
}