class Request {
  constructor() {
    this.headers = {}
    this.body = {}
    // this.originalUrl
    this.params = {}
  }
}

export default () => new Request()
