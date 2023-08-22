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
  User.findById("64e46ef5aad4c17e800f15ab")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    `mongodb+srv://mailtoshivam2002:vFn62nb1yRwQ03Yr@cluster0.svqun7l.mongodb.net/shop?retryWrites=true&w=majority`
  )
  .then((result) => {
    app.listen(3000);
    User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "shivam",
          email: "shivam@test.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });

    
    console.log("yes listening");
  })
  .catch((err) => {
    console.log(err);
  });
