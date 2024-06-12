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


       getAddFor(req,res){
            return  res.render('new-product', {errorMessage:null});
       }

       // 1st way 
//       addNewProduct(req,res){
//        console.log(req.body);
//        ProductModel.add(req.body);
//        let product = ProductModel.get();
      
//        res.render("product", {product});
//       }

// 2nd way
addNewProduct(req,res){
      
       console.log(req.body);
       ProductModel.add(req.body.name,req.body.desc,req.body.price,req.body.imageUrl);
       let product = ProductModel.get();
      
       res.render("product", {product});
      }
}


