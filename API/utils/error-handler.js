export const errorHandler = (message, status = 500) => {
    const error = Error(message);
    error.statusCode = status;
}