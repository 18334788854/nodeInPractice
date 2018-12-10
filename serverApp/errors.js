class HTTPError extends Error {
    constructor() {
        super();
    }
}

class NotFound extends HTTPError {
    constructor(message) {
        super();
        Error.captureStackTrace(this, NotFound);
        this.statusCode = 404;
        this.message = message;
        this.name = "NotFound";
    }
}

module.exports = {HTTPError: HTTPError, NotFound: NotFound};