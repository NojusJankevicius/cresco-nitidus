const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) res.status(403).json({ message: 'auth required' })

  const token = authorizationHeader && authorizationHeader.split(' ')[1];
  if (!token) res.status(400).json({ message: 'bad auth data' })

  try {
    
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ message: 'invalid token' })
    
  }
};

module.exports = authMiddleware;