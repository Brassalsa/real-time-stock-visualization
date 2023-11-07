function generateError(err: string, status: number, message: string) {
  return {
    err,
    status,
    message,
  };
}

export const err = {
  not_found: generateError("not-found", 404, "Not found!"),
  server_error: generateError("internal-error", 500, "Something went wrong"),
};
