import path from 'path';
import ProductModel from '../Model/ProductModel.js';
export default class ProductController{

       getproducts(req,res){
              let product = ProductModel.get();
       //        console.log(Product);
       //  console.log(path.resolve());
       // res.sendFile(path.join(path.resolve(),'src','View','index.ejs'));
       res.render("product", {product});
       }


}