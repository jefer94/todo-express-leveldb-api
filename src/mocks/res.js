class Response {
  constructor() {
    this.__status = 200
    this.__body = ''
    this.headers = {
      'content-type': 'text/plain'
    }
  }

  json(data) {
    this.__body = data
    this.headers['content-type'] = 'application/json'
    return this
  }

  send(data) {
    this.__body = (
      typeof data === 'object' ?
        JSON.stringify(data) :
        `${data}`
    )
    this.headers['content-type'] = 'text/plain'
    return this
  }

  status(status) {
    this.__status = status
    return this
  }
}

export default () => new Response