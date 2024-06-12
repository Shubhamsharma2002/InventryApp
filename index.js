
 import expres from "express";
 import ProductController from "./src/controller/ProductController.js";
 import validateRequest from "./src/Middleware/validationMiddleware.js";
 import path from 'path';
 import ejsLayout from 'express-ejs-layouts';
 const port = 8000;
const  server = expres();
// parse form data
server.use(expres.urlencoded({extended:true}));
// setting the view engine
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src','View'));
server.use(ejsLayout);
// creating instance of the class
const productController = new ProductController();

server.get('/', productController.getproducts);
server.get('/addProduct', productController.getAddFor);
server.post('/', validateRequest,productController.addNewProduct);
server.use(expres.static('src/View'));
server.listen(port, (req, res)=>{
    console.log(`server is running  on port No ${port}`);
})