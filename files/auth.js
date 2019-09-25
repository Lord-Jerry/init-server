const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/users.js');

class user {
  /**
   * create user account
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async createAccount(req, res, next) {
    const {
      firstname,
      lastname,
      username,
      email,
      gender,
    } = req.body;
    let { password } = req.body;
    password = bcrypt.hashSync(password, 10);

    const data = new Users({
      name: {
        first: firstname,
        last: lastname,
        user: username,
      },

      email,
      gender,
      password,
    });
    const result = await data.save();

    if (!result) {
      const err = new Error();
      err.message = 'error occured';
      err.statusCode = 500;
      return next(err);
    }

    return res.status(201).json({
      message: 'user account created successfully',
      statusCode: 201,
    });
  }

  /**
   * Log user in
   * @param {object} req - api request
   * @param {object} res - api response
   * @param {function} next - next middleware function
   * @return {json}
   */
  static async loginUser(req, res, next) {
    const { email, password } = req.body;
    const result = await Users.findOne({
      email,
    });

    if (!result) {
      const err = new Error();
      err.message = 'invalid email or password';
      err.statusCode = 401;
      return next(err);
    }

    const compare = await bcrypt.compare(password, result.password);

    if (!compare) {
      const err = new Error();
      err.message = 'invalid email or password';
      err.statusCode = 401;
      return next(err);
    }

    // sign user token
    const token = jwt.sign({
      id: result.id,
      level: result.level,
    },
    process.env.SECRET_KEY, { expiresIn: '30d' });

    // unset user password
    result.password = undefined;

    return res.status(200).json({
      message: 'logged in',
      statusCode: 200,
      token,
      result,
    });
  }
}

module.exports = user;
