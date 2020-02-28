export function index(req, res) {
  res.json({
    '/': ['GET'],
    '/todo': ['GET', 'POST', 'DELETE'],
    '/login': ['POST'],
    '/signup': ['POST']
  })
}

export * from './todo.mjs'
export * from './auth.mjs'