var friendsData = require('../data/friends.js');
var express = require("express");
var app = express();
//Routes
//=========================================
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post('/api/friends', function(req, res) {
        var newFriend = req.body;
        console.log(newFriend.scores);
        var index = compare(friendsData, newFriend)       
        friendsData.push(newFriend);

    function compare(friends, self) {
        var differenceArray = [];
        for (var i = 0; i < friends.length; i++){
            var totalDifference = 0;
            for (var j = 0; j < 10; j++){
               var difference = Math.abs(friends[i].scores[j] - self.scores[j]);
               totalDifference += difference;
            }
            differenceArray.push(totalDifference);       
        }
        var closestNerd = Math.min.apply(null, differenceArray);
        var index = differenceArray.indexOf(closestNerd);
        return index;
    }
    console.log(friendsData[index]);
        res.json(friendsData[index]);
    });
}

