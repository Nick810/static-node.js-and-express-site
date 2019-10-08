const handleFourOFour = (req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404;
  err.message = 'Looks like the page you\'re looking for doesn\'t exist.';
  console.error(err.message);
  next(err);
};

const handleGlobalError = (err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status || 500);
  res.render('error', {err});
};

module.exports = { handleFourOFour, handleGlobalError };
