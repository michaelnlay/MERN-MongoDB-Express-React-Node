//connect to controller

const AuthorController = require("../controllers/author.controller")

module.exports=(app)=> {

    //random author
    // app.get('/api/authors/random', AuthorController.findRandomAuthor);

    //route to find all authors
    app.get("/api/authors", AuthorController.findAllAuthors);

    //route to create a author
    app.post("/api/authors", AuthorController.createAuthor);

    //route to find a author
    app.get("/api/authors/:id", AuthorController.findOneAuthor);

    //route to update a author
    app.put("/api/authors/:id", AuthorController.updateAuthor)

    //route to delete a author
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
}
