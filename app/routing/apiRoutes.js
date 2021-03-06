var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        friends.push({  
            name: req.body.name,
            photo: req.body.photo,
            scores: [
                parseInt(req.body.scores[0]),
                parseInt(req.body.scores[1]),
                parseInt(req.body.scores[2]),
                parseInt(req.body.scores[3]),
                parseInt(req.body.scores[4]),
                parseInt(req.body.scores[5]),
                parseInt(req.body.scores[6]),
                parseInt(req.body.scores[7]),
                parseInt(req.body.scores[8]),
                parseInt(req.body.scores[9]),
            ]
        });

        var bestmatchscore = 50;
        var bestmatch = {};

        for(var i = 0; i < friends.length - 1; i++){
            var last = friends[friends.length - 1].scores;
            var option = friends[i].scores;
            var subtotal = 0;

            for(var j = 0; j < 10; j++){
                subtotal += Math.abs(last[j]-option[j])
            }

            if(subtotal < bestmatchscore) {
                bestmatchscore = subtotal;
                bestmatch = friends[i];
            }
        }
        console.log(bestmatch);
        res.json(bestmatch);
    });


    
}