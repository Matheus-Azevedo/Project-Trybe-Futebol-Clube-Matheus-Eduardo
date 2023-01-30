interface Status {
  badRequest: number;
  ok: number;
  created: number;
  internalServerError: number;
  conflict: number;
  unauthorized: number;
  notFound: number;
  forbidden: number;
  deleted: number;
  unprocessableEntity: number;
}

const statusCode: Status = {
  badRequest: 400,
  ok: 200,
  created: 201,
  internalServerError: 500,
  conflict: 409,
  unauthorized: 401,
  notFound: 404,
  forbidden: 403,
  deleted: 204,
  unprocessableEntity: 422,
};

export default statusCode;
