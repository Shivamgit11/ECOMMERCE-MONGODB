// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;

//username---mailtoshivam2002
//password--vFn62nb1yRwQ03Yr
//IP Access List--152.58.187.65/32

//db-name--Nodejshivam.user

//driver-code-->> mongodb+srv://mailtoshivam2002:<password>@cluster0.sj1aef9.mongodb.net/?retryWrites=true&w=majority
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://mailtoshivam2002:vFn62nb1yRwQ03Yr@cluster0.svqun7l.mongodb.net/?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("Connected");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log("line no something", err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
