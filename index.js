const fs = require('fs');

class create {

  constructor() {
    this.server = 'Server';
    this.controller = `${this.server}/Controllers`;
    this.middleware = `${this.server}/Middlewares`;
    this.model = 'Models'
    this.route = 'Routes';
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
    if (!fs.existsSync(`${this.folder}/controllers`)) {
      // create `Controllers` folder
      fs.mkdirSync(`${this.folder}/controllers`);
      return;
    }

    // TODO: work on errors
    const err = new Error();
    err.message = `${this.folder}/controllers already exists`;
    console.error(err);
  }

  createMiddlewareFolder() {

    // check if folder `Middlewares` already exists
    if (!fs.existsSync(`${this.folder}/middlewares`)) {
      // create `Middleware` folder
      fs.mkdirSync(`${this.folder}/middlewares`);
      return;
    }

    // TODO: workd on errors
    const err = new Error();
    err.message = `${this.folder}/middlewares already exists`;
    console.error(err);
  }

  createModelFolder() {
    // check if folder `Models` already exists
    if (!fs.existsSync(`${this.folder}/models`)) {
      // create `Models` folder
      fs.mkdirSync(`${this.folder}/models`);
      return;
    }

    const err = new Error();
    err.message = `${this.folder}/models already exists`;
    console.error(err);
  }

  createRouteFolder() {
    // check if folder `Routes` already exists
    if (!fs.existsSync(`${this.folder}/routes`)) {
      // create `Routes` folder
      fs.mkdirSync(`${this.folder}/routes`);
      return;
    }

    const err = new Error();
    err.message = `${this.folder}/routes already exists`;
    console.error(err);
  }
} 


const create1 = new create();
create1.createBaseFolder();
create1.createControllerFolder();
create1.createMiddlewareFolder();
create1.createModelFolder();
create1.createRouteFolder();