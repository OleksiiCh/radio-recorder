const app = require("express")();
require("dotenv").config();
const port = process.env.PORT || 6000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //   useCreateIndex: true,
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.listen(port, () => {
  console.log(`Server running at here ${port}`);
});
const { auth } = require("./middleware/auth");
const {
  RegisterUser,
  LoginUser,
  LogoutUser,
  getUserDetails,
} = require("./controller/AuthController");
app.post("/api/users/register", RegisterUser);
app.post("/api/users/login", LoginUser);
app.get("/api/users/auth", auth, getUserDetails);
app.get("/api/users/logout", auth, LogoutUser);
