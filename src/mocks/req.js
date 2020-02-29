class Request {
  constructor() {
    this.headers = {}
    this.body = {}
    this.originalUrl
  }
}

export default () => new Request