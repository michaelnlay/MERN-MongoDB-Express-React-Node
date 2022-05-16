//connect to controller

const JokeController = require("../controllers/joke.controller")

module.exports=(app)=> {
    app.get("/api/hello", JokeController.sayHello); //testing purpose

    //random joke
    app.get('/api/jokes/random', JokeController.findRandomJoke);

    //route to find all jokes
    app.get("/api/jokes", JokeController.findAllJokes);

    //route to create a joke
    app.post("/api/jokes", JokeController.createJoke);

    //route to find a joke
    app.get("/api/jokes/:id", JokeController.findOneJoke);

    //route to update a joke
    app.put("/api/jokes/:id", JokeController.updateJoke)

    //route to delete a joke
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
}
