const express = require("express");
const path = require("path");
const http = require("http");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const flash = require('connect-flash');
const morgan = require("morgan");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const cors =require("cors");
const app= express();
const router = require("./src/routes");
const config = require("./server.config.js");
const User = require("./src/models/user");



app.use(cors())


// Ruta estatica para servir archivos
app.use(express.static(path.resolve(__dirname, "./public")));


// Body Parser para que se puedan enviar json en el body del request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Logger para mostrar todos los request que llegan al servidor
app.use(morgan("dev"));
app.use(
    sessions({
      secret: "bootcamp",
      resave: false,
      saveUninitialized: false,
    })
);
app.use(flash());


// Middleware
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      
      User.findOne({ where: { email } })
        .then((user) => {
         
          if (!user) {
            // email not found
            return done(null, false);
          }

          user.hash(password, user.salt).then((hash) => {
            
            if (hash !== user.password) {
              
              return done(null, false); // wrong password
            }

            return done(null, user); // success :D
          });
        })
        .catch(done); // done(err)
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use((req, res, next) => {
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    next();
  });

// Middleware de rutas


app.use("/", router);

app.get('/*',(req,res)=>{
  res.send(__dirname + '/public/index.html')
})

User.sync({ force: false }).then(() => {
  http.createServer(app).listen(config.port, () => {
    console.log(`Server listening at port ${config.port}`);
  });
});