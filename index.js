
 import expres from "express";
 import ProductController from "./src/controller/ProductController.js";
 import validateRequest from "./src/Middleware/validationMiddleware.js";
 import path from 'path';
 import ejsLayout from 'express-ejs-layouts';
import  {uploadfile}  from "./src/Middleware/fileUploadMiddleware.js";
import UserController from "./src/controller/UserController.js";
import session from "express-session";
import { auth } from "./src/Middleware/sessionMiddleware.js";
 const port = 8000;
const  server = expres();
server.use(expres.static('public'));
// express sesion
server.use(session({
    secret:'Secretkey',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false},
}))
// parse form data
server.use(expres.urlencoded({extended:true}));
// setting the view engine
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src','View'));
server.use(ejsLayout);
// creating instance of the class
const productController = new ProductController();
const userController = new UserController();
server.get('/', productController.getproducts);
server.get('/register', userController.getRegister);
server.get('/login', userController.getLogin);
server.post('/register', userController.postregister);
server.post('/login', userController.postlogin);
server.get('/logout', userController.logout);
server.get('/addProduct',auth, productController.getAddFor);
server.get('/upadte/:id',auth, productController.updateproductview);
server.post('/delete/:id',auth, productController.deleteProduct);
server.post('/upadteProduct', auth,productController.postupdatedproduct);
server.post('/',uploadfile.single('imageUrl'),validateRequest,productController.addNewProduct);
server.use(expres.static('src/View'));
server.listen(port, (req, res)=>{
    console.log(`server is running  on port No ${port}`);
})