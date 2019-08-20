//require permet d'aller chercher dans node_modules

// Allow us to set an app. Express maintain the backend
const express = require("express");

// mongoose module allow use to read on a mongoDB
const mongoose = require("mongoose");
const serverkey = require("./config/keys");

const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();

// app.use(<specific_middleware_layer_here>)
// use function is used to add middleware layers

// Bodyparser middleware
// parse application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

// parse application/json
app.use(bodyParser.json());

// DB Config
const db = serverkey.mongoURI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected !"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log(`Server up and running on port ${port} !`));