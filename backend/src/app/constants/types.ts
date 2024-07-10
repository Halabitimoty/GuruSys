export enum STATUS_CODES {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum CONTENT_TYPES {
  JSON = "application/json",
  TEXT = "text/plain",
  HTML = "text/html",
}

export enum HTTP_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum PATHS {
  INDEX = "/",
  AUTH = "/auth",
  NOTES = "/blog",
}
