#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// TODO: add comments where necessary
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
      const file = path.join(__dirname, '../files/package.json');

      fs.readFile(file, "utf-8", (err, data) => {
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
      const file = path.join(__dirname, '../files/.gitignore');

      fs.readFile(file, "utf-8", (err, data) => {
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
      const file = path.join(__dirname, '../files/.env');

      fs.readFile(file, "utf-8", (err, data) => {
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

  createEslintFile() {
    if (!fs.existsSync(`${this.server}/.eslintrc.json`)) {
      const file = path.join(__dirname, '../files/.eslintrc.json');

      fs.readFile(file, "utf-8", (err, data) => {
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
      const file = path.join(__dirname, '../files/server.js')

      fs.readFile(file, "utf-8", (err, data) => {
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

  createControllerFile() {
    if (!fs.existsSync(`${this.controller}/auth.js`)) {
      const file = path.join(__dirname, '../files/auth.js');

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) { console.log(err) }

        fs.writeFile(`${this.controller}/auth.js`, data, (err) => {
          if (err) console.log('Error creating auth.js file');

          console.log("Successfully created auth.js");
        });
      })
      return;
    }

    const err = new Error();
    err.message = `auth.js already exists`;
    console.error(err);
  }

  createModelFile() {
    if (!fs.existsSync(`${this.model}/users.js`)) {
      const file = path.join(__dirname, '../files/users.js')

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) { console.log(err) }

        fs.writeFile(`${this.model}/users.js`, data, (err) => {
          if (err) console.log('Error creating users.js file');

          console.log("Successfully created users.js");
        });
      })
      return;
    }

    const err = new Error();
    err.message = `users.js already exists`;
    console.error(err);
  }

  createAuthFile() {
    if (!fs.existsSync(`${this.middleware}/authentication.js`)) {
      const file = path.join(__dirname, '../files/authentication.js');

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) { console.log(err) }

        fs.writeFile(`${this.middleware}/authentication.js`, data, (err) => {
          if (err) console.log('Error creating authentication.js file');

          console.log("Successfully created authentication.js");
        });
      })
      return;
    }

    const err = new Error();
    err.message = `authentication.js already exists`;
    console.error(err);
  }

  createValidatorFile() {
    if (!fs.existsSync(`${this.middleware}/validator.js`)) {
      const file = path.join(__dirname, '../files/validator.js')

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) { console.log(err) }

        fs.writeFile(`${this.middleware}/validator.js`, data, (err) => {
          if (err) console.log('Error creating validator.js file');

          console.log("Successfully created validator.js");
        });
      })
      return;
    }

    const err = new Error();
    err.message = `validator.js already exists`;
    console.error(err);
  }

  createErrorFile() {
    if (!fs.existsSync(`${this.middleware}/errorhandler.js`)) {
      const file = path.join(__dirname, '../files/errorhandler.js');

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) { console.log(err) }

        fs.writeFile(`${this.middleware}/errorhandler.js`, data, (err) => {
          if (err) console.log('Error creating errorhandler.js file');

          console.log("Successfully created errorhandler.js");
        });
      })
      return;
    }

    const err = new Error();
    err.message = `errorhandler.js already exists`;
    console.error(err);
  }

  createRouteFile() {
    if (!fs.existsSync(`${this.route}/router.js`)) {
      const file = path.join(__dirname, '../files/router.js');

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) { console.log(err) }

        fs.writeFile(`${this.route}/router.js`, data, (err) => {
          if (err) console.log('Error creating router.js file');

          console.log("Successfully created router.js");
        });
      })
      return;
    }

    const err = new Error();
    err.message = `router.js already exists`;
    console.error(err);
  }

  createDbFile() {
    if (!fs.existsSync(`${this.config}/db.js`)) {
      const file = path.join(__dirname, '../files/db.js');

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) { console.log(err) }

        fs.writeFile(`${this.config}/db.js`, data, (err) => {
          if (err) console.log('Error creating router.js file');

          console.log("Successfully created db.js");
        });
      })
      return;
    }

    const err = new Error();
    err.message = `db.js already exists`;
    console.error(err);
  }

  runInstall() {
    const spawn = require('child_process').spawn;
    const child = spawn('npm i');

    child.stdout.on('data', function (chunk) {
      console.info(chunk);
    });

  }

  promptInstall() {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question("Do you want to run npm instal [Y/N] ", (res) => {
      if (res.toLowerCase() === 'Y') {
        const spawn = require('child_process').spawn;
        const child = spawn('ls');
        console.log(child)

        child.stdout.on('data', function (chunk) {
          console.info(chunk);
        });
      }

      else process.exit(0);
    });
  }


}


const init = new create();
init.createBaseFolder();
init.createControllerFolder();
init.createMiddlewareFolder();
init.createConfigFolder();
init.createModelFolder();
init.createRouteFolder();
init.createPackageFile();
init.createGitIgnoreFile();
init.createEnvFile();
init.createServerFile();
init.createEslintFile();
init.createControllerFile();
init.createRouteFile();
init.createModelFile();
init.createValidatorFile();
init.createAuthFile();
init.createErrorFile();
init.createDbFile();
setTimeout(init.promptInstall, 2000)
