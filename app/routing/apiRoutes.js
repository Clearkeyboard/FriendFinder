var friendsData = require('../data/friends.js');
var express = require("express");
var app = express();
//Routes
//=========================================
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post('/api/new', function(req, res) {
        var newFriend = req.body;

        console.log(newFriend);
        friendsData.push(newFriend);

        function compare() {
        
        }
    });
}