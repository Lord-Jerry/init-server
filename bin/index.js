#!/usr/bin/env node
const fs = require('fs');

class create {

  constructor() {
    this.server = 'Server';
    this.controller = `${this.server}/Controllers`;
    this.middleware = `${this.server}/Middlewares`;
    this.model = `${this.server}/Models`;
    this.route = `${this.server}/Routes`;
    this.config = `${this.server}/Config`;
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

  createConfigFolder() {
    // check if folder `Config` already exists
    if (!fs.existsSync(`${this.config}`)) {
      // create `Config` folder
      fs.mkdirSync(`${this.config}`);
      return;
    }

    const err = new Error();
    err.message = `${this.config} already exists`;
    console.error(err);
  }

  createPackageFile() {

    if (!fs.existsSync(`${this.server}/package.json`)) {

      fs.readFile("./files/package.json", "utf-8", (err, data) => {
        if (err) { console.log(err) }

        fs.writeFile(`${this.server}/package.json`, data, (err) => {
          if (err) console.log('Error creating package.json file');

          console.log("Successfully created package.json.");
        });
      })
      return;
    }

    const err = new Error();
    err.message = `package.json already exists`;
    console.error(err);
  }

  createGitIgnoreFile() {
    if (!fs.existsSync(`${this.server}/.gitignore`)) {

      fs.readFile("./files/.gitignore", "utf-8", (err, data) => {
        if (err) { console.log(err) }

        fs.writeFile(`${this.server}/.gitignore`, data, (err) => {
          if (err) console.log('Error creating .gitignore file');

          console.log("Successfully created .gitignore.");
        });
      })
      return;
    }

    const err = new Error();
    err.message = `.gitignore already exists`;
    console.error(err);
  }

  createEnvFile() {
    if (!fs.existsSync(`${this.server}/.env`)) {

      fs.readFile("./files/.env", "utf-8", (err, data) => {
        if (err) { console.log(err) }

        fs.writeFile(`${this.server}/.env`, data, (err) => {
          if (err) console.log('Error creating .env file');

          console.log("Successfully created .env");
        });
      })
      return;
    }

    const err = new Error();
    err.message = `.env already exists`;
    console.error(err);
  }

  creatEslintFile() {
    if (!fs.existsSync(`${this.server}/.eslintrc.json`)) {

      fs.readFile("./files/.eslintrc.json", "utf-8", (err, data) => {
        if (err) { console.log(err) }

        fs.writeFile(`${this.server}/eslintrc.json`, data, (err) => {
          if (err) console.log('Error creating eslintrc.json file');

          console.log("Successfully created eslintrc.json");
        });
      })
      return;
    }

    const err = new Error();
    err.message = `eslintrc.json already exists`;
    console.error(err);
  }

  createServerFile() {
    if (!fs.existsSync(`${this.server}/server.js`)) {

      fs.readFile("./files/server.js", "utf-8", (err, data) => {
        if (err) { console.log(err) }

        fs.writeFile(`${this.server}/server.js`, data, (err) => {
          if (err) console.log('Error creating server.js file');

          console.log("Successfully created server.js");
        });
      })
      return;
    }

    const err = new Error();
    err.message = `server.js already exists`;
    console.error(err);
  }
}


const create1 = new create();
create1.createBaseFolder();
create1.createControllerFolder();
create1.createMiddlewareFolder();
create1.createConfigFolder();
create1.createModelFolder();
create1.createRouteFolder();
create1.createPackageFile();
create1.createGitIgnoreFile();
create1.createEnvFile();