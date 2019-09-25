#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

/**
 * TODO: add comments where necessary
 * This class helps automatically create server structure, and create some needed files,
 * to help speed up development process.
 */
class create {

  constructor() {
    this.server = 'Server';
    this.controller = `${this.server}/Controllers`;
    this.middleware = `${this.server}/Middlewares`;
    this.model = `${this.server}/Models`;
    this.route = `${this.server}/Routes`;
    this.config = `${this.server}/Config`;
  }

  /**
   * this method creates the base folder `Server`
   */
  createBaseFolder() {

    // check if base folder `Server` already exists
    if (!fs.existsSync(this.server)) {
      // create `Server` folder
      fs.mkdirSync(this.server);
      return;
    }

    console.error(`${this.server} folder  already exists`);
  }

  /**
   * this method creates the `Controllers` folder
   */
  createControllerFolder() {

    // check if folder `Controllers` already exists
    if (!fs.existsSync(`${this.controller}`)) {
      // create `Controllers` folder
      fs.mkdirSync(`${this.controller}`);
      return;
    }

    console.error(`${this.controller} folder already exists`);
  }

  /**
   * this method creates the `Middlewares` folder
   */
  createMiddlewareFolder() {

    // check if folder `Middlewares` already exists
    if (!fs.existsSync(`${this.middleware}`)) {
      // create `Middleware` folder
      fs.mkdirSync(`${this.middleware}`);
      return;
    }

    console.error(`${this.middleware} folder already exists`);
  }

  /**
   * this method creates the `Models` folder
   */
  createModelFolder() {
    // check if folder `Models` already exists
    if (!fs.existsSync(`${this.model}`)) {
      // create `Models` folder
      fs.mkdirSync(`${this.model}`);
      return;
    }

    console.error(`${this.model} folder already exists`);
  }

  /**
   * this method creates the `Routes` folder
   */
  createRouteFolder() {
    // check if folder `Routes` already exists
    if (!fs.existsSync(`${this.route}`)) {
      // create `Routes` folder
      fs.mkdirSync(`${this.route}`);
      return;
    }

    console.error(`${this.route} folder already exists`);
  }

  /**
   * this method creates the `Config` folder
   */
  createConfigFolder() {
    // check if folder `Config` already exists
    if (!fs.existsSync(`${this.config}`)) {
      // create `Config` folder
      fs.mkdirSync(`${this.config}`);
      return;
    }

    console.error(`${this.config} folder already exists`);
  }

  /**
   * this method creates the `package.json` file
   */
  createPackageFile() {
    // check if `package.json` file already exist
    if (!fs.existsSync(`${this.server}/package.json`)) {

      const file = path.join(__dirname, '../files/package.json');
      fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        // write package.json file
        fs.writeFile(`${this.server}/package.json`, data, (err) => {
          if (err) {
            console.error('Error creating package.json file');
            return;
          }

          console.info("Successfully created package.json.");
        });
      });

      return;
    }

    console.error(`package.json already exists`);
  }

  /**
   * this method creates the `.gitignore` file 
   */
  createGitIgnoreFile() {
    // check if `.gitignore` already exist
    if (!fs.existsSync(`${this.server}/.gitignore`)) {
      const file = path.join(__dirname, '../files/.gitignore');

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        // write `.gitignore` file
        fs.writeFile(`${this.server}/.gitignore`, data, (err) => {
          if (err) {
            console.error('Error creating .gitignore file');
            return;
          }

          console.info("Successfully created .gitignore.");
        });
      });

      return;
    }

    console.error(`.gitignore already exists`);
  }

  /**
   * this method creates the `.env` file
   */
  createEnvFile() {
    // check if `.env` already exist
    if (!fs.existsSync(`${this.server}/.env`)) {
      const file = path.join(__dirname, '../files/.env');

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        // write `.env` file
        fs.writeFile(`${this.server}/.env`, data, (err) => {
          if (err) {
            console.error('Error creating .env file');
            return;
          }

          console.info("Successfully created .env");
        });
      });

      return;
    }

    console.error(`.env already exists`);
  }

  /**
   * this method creates the `.eslintrc.json` file
   */
  createEslintFile() {
    // check if `.eslintrc` already exist
    if (!fs.existsSync(`${this.server}/.eslintrc.json`)) {
      const file = path.join(__dirname, '../files/.eslintrc.json');

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          return;
        }

        // write `.eslintrc.json` file
        fs.writeFile(`${this.server}/eslintrc.json`, data, (err) => {
          if (err) {
            console.log('Error creating eslintrc.json file');
          }

          console.log("Successfully created eslintrc.json");
        });
      });

      return;
    }

    console.error(`eslintrc.json already exists`);
  }

  /**
   * this method creates the `server.js` file
   */
  createServerFile() {
    // check if `server.js` exists in the server folder
    if (!fs.existsSync(`${this.server}/server.js`)) {
      const file = path.join(__dirname, '../files/server.js')

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          return;
        }

        // write the `server.js` file
        fs.writeFile(`${this.server}/server.js`, data, (err) => {
          if (err) {
            console.log('Error creating server.js file');
            return;
          }

          console.log("Successfully created server.js");
        });
      });

      return;
    }

    console.log(`server.js already exists`);
  }

  /**
   * this method creates the `auth.js` file in the controllers folder
   */
  createControllerFile() {
    // check if `auth.js` exists already in the controllers folder
    if (!fs.existsSync(`${this.controller}/auth.js`)) {
      const file = path.join(__dirname, '../files/auth.js');

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          return;
        }

        // write `auth.js` file
        fs.writeFile(`${this.controller}/auth.js`, data, (err) => {
          if (err) {
            console.log('Error creating auth.js file');
            return;
          }

          console.log("Successfully created auth.js");
        });
      });

      return;
    }

    console.log(`auth.js already exists`);
  }

  /**
   * create `users.js` file in the Models folder
   */
  createModelFile() {
    // check if the `users.js` file exists already
    if (!fs.existsSync(`${this.model}/users.js`)) {
      const file = path.join(__dirname, '../files/users.js')

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          return;
        }

        // write `userrs.js` file
        fs.writeFile(`${this.model}/users.js`, data, (err) => {
          if (err) {
            console.log('Error creating users.js file');
            return;
          }

          console.log("Successfully created users.js");
        });
      });

      return;
    }

    console.log(`users.js already exists`);
  }

  /**
   * create `authentication.js` file in middlewares folder
   */
  createAuthFile() {
    // check if `authentication.js` file already exists in middlewares folder
    if (!fs.existsSync(`${this.middleware}/authentication.js`)) {
      const file = path.join(__dirname, '../files/authentication.js');

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          return;
        }

        fs.writeFile(`${this.middleware}/authentication.js`, data, (err) => {
          if (err) {
            console.log('Error creating authentication.js file');
            return;
          }

          console.log("Successfully created authentication.js");
        });
      });

      return;
    }

    console.log(`authentication.js already exists`);
  }

  /**
   * this method creates `validator.js` file in middlewares folder
   */
  createValidatorFile() {
    // check if `validator.js` file exists already in middlewares folder
    if (!fs.existsSync(`${this.middleware}/validator.js`)) {
      const file = path.join(__dirname, '../files/validator.js');

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          return;
        }

        fs.writeFile(`${this.middleware}/validator.js`, data, (err) => {
          if (err) {
            console.log('Error creating validator.js file');
            return;
          }

          console.log("Successfully created validator.js");
        });
      });

      return;
    }

    console.error(`validator.js already exists`);
  }

  /**
   * create `errorhandler.js` file in middlewares folder
   */
  createErrorFile() {
    // check if `errorhandler.js` file exists
    if (!fs.existsSync(`${this.middleware}/errorhandler.js`)) {
      const file = path.join(__dirname, '../files/errorhandler.js');

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        }

        // write `errorhandler.js` file in middlewares folder
        fs.writeFile(`${this.middleware}/errorhandler.js`, data, (err) => {
          if (err) {
            console.log('Error creating errorhandler.js file');
            return;
          }

          console.log("Successfully created errorhandler.js");
        });
      });

      return;
    }

    console.error(`errorhandler.js already exists`);
  }

  /**
   * this method creates `router.js` file in the routes folder 
   */
  createRouteFile() {
    // check if `router.js` file exists already in the routes folder
    if (!fs.existsSync(`${this.route}/router.js`)) {
      const file = path.join(__dirname, '../files/router.js');

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          return;
        }

        // write `router.js` file
        fs.writeFile(`${this.route}/router.js`, data, (err) => {
          if (err) {
            console.log('Error creating router.js file');
            return;
          }

          console.log("Successfully created router.js");
        });
      });

      return;
    }

    console.log(`router.js already exists`);
  }

  /**
   * create `db.js` file in config folder
   */
  createDbFile() {
    // check if `db.js` file exists already in config folder
    if (!fs.existsSync(`${this.config}/db.js`)) {
      const file = path.join(__dirname, '../files/db.js');

      fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          return;
        }

        // write `db.js` file
        fs.writeFile(`${this.config}/db.js`, data, (err) => {
          if (err) {
            console.log('Error creating router.js file');
            return;
          }

          console.log("Successfully created db.js");
        });
      });

      return;
    }

    console.error(`db.js already exists`);
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
