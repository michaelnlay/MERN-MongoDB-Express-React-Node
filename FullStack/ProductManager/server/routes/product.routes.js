//connect to controller

const ProductController = require("../controllers/product.controller")

module.exports=(app)=> {

    //random product
    // app.get('/api/products/random', ProductController.findRandomProduct);

    //route to find all products
    app.get("/api/products", ProductController.findAllProducts);

    //route to create a product
    app.post("/api/products", ProductController.createProduct);

    //route to find a product
    app.get("/api/products/:id", ProductController.findOneProduct);

    //route to update a product
    app.put("/api/products/:id", ProductController.updateProduct)

    //route to delete a product
    app.delete("/api/products/:id", ProductController.deleteProduct);
}
