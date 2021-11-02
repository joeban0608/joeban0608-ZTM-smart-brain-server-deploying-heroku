const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const app = express();
const knex = require("knex");
const register = require('./controller/register');
const signin = require('./controller/signin')
const profile = require('./controller/profile')
const image = require('./controller/image')

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "09870987",
    database: "smartbraindb",
  },
});

// db.select("*")
//   .from("users")
//   .then((data) => {
//     // console.log(data);
//   });

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send('test, root');
});

app.post("/signin", signin.handleSignin(db, bcrypt));

app.post("/register", (req, res) => { register.handleRegister(req, res, db, bcrypt) });

app.get("/profile/:id", (req, res) => { profile.handleProfile(req, res, db) });

app.put("/image", (req, res) => { image.handleImage(req, res, db)});

app.post("/imageurl", (req, res) => { image.handleApiCall(req, res)});

app.listen(2999, () => {
  console.log("app is running on port 2999");
});
