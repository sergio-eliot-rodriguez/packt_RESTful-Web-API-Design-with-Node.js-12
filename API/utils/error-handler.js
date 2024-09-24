export const errorHandler = (message, status) => {
    const error = Error(message);
    error.statusCode = status;
}