const db = require("../models");
module.exports = function(app){
    app.get("/api/workouts", async (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });


}
