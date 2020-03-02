import jwt from 'jsonwebtoken'

export const secret = () => process.env.SECRET || '.`5H+C8ewL~&wat"z<-A.eHmW2M}./m)w;zbh\'aBZwshA>!M;h&dyBhnaJK{_"Y'
export const saltRounds = () => +(process.env.SALT_ROUNDS || 10)

export function sign(data) {
  return jwt.sign(data, secret(), { expiresIn: '1d' })
}

function isNotRestricted(url) {
  return !(url === '/login' ||
           url === '/signup' ||
           url === '/')
}

export default function (req, res, next) {
  req.user = { id: 0 }
  const notRestricted = isNotRestricted(req.originalUrl)
  if (notRestricted) {
    if (!req.headers.authorization && !/^Bearer /.test(req.headers.authorization)) {
      res.status(401).send([])
      return
    }


    try {
      const data = jwt.verify(req.headers.authorization.replace('Bearer ', ''), secret())
      if (data) {
        req.user = data
        next()
        return
      }
    }
    catch (e) {
      res.status(401).send([])
      next()
      return
    }
  }
  next()
}
