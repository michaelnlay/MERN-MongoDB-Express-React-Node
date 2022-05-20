//connect to controller

const NinjaController = require("../controllers/ninja.controller")

module.exports=(app)=> {

    //random ninja
    app.get('/api/ninjas/random', NinjaController.findRandomNinja);

    //route to find all ninjas
    app.get("/api/ninjas", NinjaController.findAllNinjas);

    //route to create a ninja
    app.post("/api/ninjas", NinjaController.createNinja);

    //route to find a ninja
    app.get("/api/ninjas/:id", NinjaController.findOneNinja);

    //route to update a ninja
    app.put("/api/ninjas/:id", NinjaController.updateNinja)

    //route to delete a ninja
    app.delete("/api/ninjas/:id", NinjaController.deleteNinja);
}
