var express = require('express');
var router = express.Router();
var models = require('../models');
/* GET users listing. */
router.get('/', function(req, res, next) {

    var userData = {
        email: 'arifulhb1@gmail.com',
        userid: 'arifulhb1',
        firstName: 'ariful',
        lastName: 'haque',
        status: 'active',
        userType: 'user',
        password: 'test',
        lastLogin: '2016-04-26'
    };
    var user = models.User.build(userData);

    user.save(userData)
        .then(function (newUser) {
            console.log(newUser);
            res.send('User created');
        })
        .catch(function (er) {
            res.send(er);
        });

});

module.exports = router;
