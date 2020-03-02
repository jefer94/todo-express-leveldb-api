class Response {
  constructor() {
    this.mockStatus = 200
    this.mockBody = ''
    this.headers = {
      'content-type': 'text/plain'
    }
  }

  json(data) {
    this.mockBody = data
    this.headers['content-type'] = 'application/json'
    return this
  }

  send(data) {
    this.mockBody = (
      typeof data === 'object' ?
        JSON.stringify(data) :
        `${data}`
    )
    this.headers['content-type'] = 'text/plain'
    return this
  }

  status(status) {
    this.mockStatus = status
    return this
  }
}

export default () => new Response()
