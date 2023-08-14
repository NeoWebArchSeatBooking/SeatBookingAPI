export class AppError extends Error {
  message: string;
  code: number;
  constructor(code: number, message: string) {
    super();
    this.message = message;
    this.code = code;
  }
}

export class BadRequest extends AppError {
  constructor(message: string) {
    super(400, message);
  }
}

export class ConflictError extends AppError {
  constructor(message: string) {
    super(409, message);
  }
}

export class AuthError extends AppError {
  constructor(message: string) {
    super(403, message);
  }
}

export class NotFoundError extends AppError {
  constructor(key: string) {
    super(404, `${key} not found`);
  }
}
