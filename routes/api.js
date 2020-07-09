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


    app.post("/api/workouts",({ body }, res) =>{ 
        db.Workout.create(body)
        .then(db => {
            res.json(db);
          })
          .catch(err => {
            res.json(err);
          });
    })

    app.put("/api/workouts/:id" ,({body, params}, res) => {
        const id = params.id;
        console.log(body)

    })

}
