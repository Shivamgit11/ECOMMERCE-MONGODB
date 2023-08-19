// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;

//username---mailtoshivam2002
//password--3f16ihIFyGsMgFGJ
//IP Access List--152.58.133.106/32

//driver-code-->> mongodb+srv://mailtoshivam2002:<password>@cluster0.sj1aef9.mongodb.net/?retryWrites=true&w=majority
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://mailtoshivam2002:3f16ihIFyGsMgFGJ@cluster0.sj1aef9.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;

