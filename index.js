
 import expres from "express";
 import ProductController from "./src/controller/ProductController.js";
 const port = 8000;
const  server = expres();
server.use(expres.static('src/View'));

// creating instance of the class
const productController = new ProductController();
server.get('/', productController.getproducts)

server.listen(port, (req, res)=>{
    console.log(`server is running  on port No ${port}`);
})