export function index(req, res) {
  res.json({
    '/': ['GET'],
    '/todo': ['GET', 'POST', 'DELETE'],
    '/login': ['POST'],
    '/signup': ['POST']
  })
}

export const indexPath = '/'

export * from './todo'
export * from './auth'