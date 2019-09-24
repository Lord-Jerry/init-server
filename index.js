const fs = require('fs');

class create {

  constructor() {
    this.server = 'Server';
    this.controller = `${this.server}/Controllers`;
    this.middleware = `${this.server}/Middlewares`;
    this.model = `${this.server}/Models`;
    this.route = `${this.server}/Routes`;
  }
  createBaseFolder() {

    // check if base folder `Server` already exists
    if (!fs.existsSync(this.server)) {
      // create `Server` folder
      fs.mkdirSync(this.server);
      return;
    }

    // TODO: work on erorrs
    const err = new Error();
    err.message = `${this.server} already exists`;
    console.error(err);
  }

  createControllerFolder() {

    // check if folder `Controllers` already exists
    if (!fs.existsSync(`${this.controller}`)) {
      // create `Controllers` folder
      fs.mkdirSync(`${this.controller}`);
      return;
    }

    // TODO: work on errors
    const err = new Error();
    err.message = `${this.controller} already exists`;
    console.error(err);
  }

  createMiddlewareFolder() {

    // check if folder `Middlewares` already exists
    if (!fs.existsSync(`${this.middleware}`)) {
      // create `Middleware` folder
      fs.mkdirSync(`${this.middleware}`);
      return;
    }

    // TODO: workd on errors
    const err = new Error();
    err.message = `${this.middleware} already exists`;
    console.error(err);
  }

  createModelFolder() {
    // check if folder `Models` already exists
    if (!fs.existsSync(`${this.model}`)) {
      // create `Models` folder
      fs.mkdirSync(`${this.model}`);
      return;
    }

    const err = new Error();
    err.message = `${this.model} already exists`;
    console.error(err);
  }

  createRouteFolder() {
    // check if folder `Routes` already exists
    if (!fs.existsSync(`${this.route}`)) {
      // create `Routes` folder
      fs.mkdirSync(`${this.route}`);
      return;
    }

    const err = new Error();
    err.message = `${this.route} already exists`;
    console.error(err);
  }
} 


const create1 = new create();
create1.createBaseFolder();
create1.createControllerFolder();
create1.createMiddlewareFolder();
create1.createModelFolder();
create1.createRouteFolder();