const authConfigureMiddleware = (req, res, next) => {
  if(!process.env.TOKEN_SECRET){
    res.status(500).json({ message: 'server error: authentication not configured'})
    return;
  }
  next();
};

module.exports = authConfigureMiddleware;