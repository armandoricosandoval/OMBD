const express = require('express');
const router = express.Router();
const passport= require('passport');
const User = require("../models/user");

router.get('/register', (req,res,next)=>{
  res.send(req.user)
});

router.post('/register', (req,res,next)=>{
  
    User.create(req.body)
    .then((user) => {
        res.status(201).send(user);
    });
});



router.get('/login', (req,res,next)=>{
    res.send(req.user)
});

router.post('/login', passport.authenticate('local'),(req,res)=>{
    res.send(req.user)
});

router.get('/profile', isAuthenticated ,(req,res,next)=>{
    res.send('/profile')
});

router.post("/logout", (req, res) => {
    req.logOut();
  res.sendStatus(200);
});

router.get("/me", (req, res) => {
    if (!req.user) {
      return res.sendStatus(401);
    }
  
    res.send(req.user);
  });

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login')
  }
 
module.exports = router;