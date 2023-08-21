const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

const User = require("./models/user");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res) => {
//   console.log("just chill buddyfault", req.originalUrl);
//   res.sendFile(path.join(__dirname, `public/${req.url}`));
// });

app.use((req, res, next) => {
  User.findById("64e38a179dac9303ca1fb47f")
    .then((user) => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    `mongodb+srv://mailtoshivam2002:vFn62nb1yRwQ03Yr@cluster0.svqun7l.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
