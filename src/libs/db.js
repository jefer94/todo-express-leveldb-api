import levelup from 'levelup'
import leveldown from 'leveldown'

// 1) Create our store
let db = levelup(leveldown('./.storage'))

// export function mockDb(mock) {
//   db = mock
// }

export async function get(key, value) {
  return await db.get(key)
}

export async function put(key, value) {
  return await db.put(key, value)
}

export async function del(key) {
  return await db.del(key)
}