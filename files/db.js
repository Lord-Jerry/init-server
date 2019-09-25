const mongoose = require('mongoose');
let dbUrl;
if (process.env.NODE_ENV === 'production') dbUrl = process.env.PRODUCTION_DB_URL;

else dbUrl = process.env.DEV_DB_URL;


const connect = () => {
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
  })
    .then(() => console.log('Database Up And Running'))
    .catch(err => console.log(err));
}

module.exports = connect;
