const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user')

passport.serializeUser(function (user, done) {
    done(null, user.id);
}); // la forma de almacenar en el navegador 

passport.deserializeUser(function (id, done) {
    User.findByPk(id)
        .then((user) => {
            done(null, user);
        })
        .catch(done);
}); // la forma de 

passport.use('local-signup', new LocalStrategy(
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


passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const user = await User.findOne({ email: email });
    if (!user) {
        return done(null, false, req.flash('signinMessage', 'No User '));
    }
    if (!user.comparePassword(password)) {
        return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
    }
    return done(null, user);
}));

// lo que hago es que cuando el usuario se logeer voy a utilizar el modulo primero(19-22), el segundo(23-40) recibe el usuario lo crea y lo guarda o devuelve error
// utilizo esto que vi en la documentacion para decirle al usuario que ya existe o el password esta mal 

