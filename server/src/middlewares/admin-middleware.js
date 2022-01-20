const adminMiddleware = (req, res, next) => {
  if(req.user.role !== "admin"){
    res.status(403).json({
      message: 'admin only'
    });
    return;
  }
    next();
};

module.exports = adminMiddleware;