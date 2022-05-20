//connect to controller

const PetController = require("../controllers/pet.controller")

module.exports=(app)=> {

    //random pet
    // app.get('/api/pets/random', PetController.findRandomPet);

    //route to find all pets
    app.get("/api/pets", PetController.findAllPets);

    //route to create a pet
    app.post("/api/pets", PetController.createPet);

    //route to find a pet
    app.get("/api/pets/:id", PetController.findOnePet);

    //route to update a pet
    app.put("/api/pets/:id", PetController.updatePet)

    //route to delete a pet
    app.delete("/api/pets/:id", PetController.deletePet);
}
