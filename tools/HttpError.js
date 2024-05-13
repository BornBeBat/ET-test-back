const messageList = {
  400: 'Bad Request',
  404: 'Not Found',
};

export const HttpError = (status, message = messageList[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};
