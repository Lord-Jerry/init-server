const jwt = require('jsonwebtoken');

class authenticate {
  /**
   * check if token exist in request header
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static checkTokenExists(req, res, next) {
    const { token } = req.headers;

    if (token === undefined || token === null || token === '') {
      const err = new Error();
      err.message = 'token does not exist';
      err.statusCode = 401;
      return next(err);
    }

    return next();
  }

  /**
   * check token valid
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static checkTokenValid(req, res, next) {
    const { token } = req.headers;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
      const err = new Error();
      err.message = 'invalid token';
      err.statusCode = 401;
      return next(err);
    }

    return next();
  }

  /**
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static checkAdmin(req, res, next) {
    const { token } = req.headers;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (decoded.level !== 'admin') {
      const err = new Error();
      err.message = 'not authorized';
      err.statusCode = 401;
      return next(err);
    }

    return next();
  }
}

module.exports = authenticate;
