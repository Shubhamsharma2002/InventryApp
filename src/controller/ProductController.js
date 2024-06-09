import path from 'path';

export default class ProductController{

       getproducts(req,res){
        console.log(path.resolve());
       res.sendFile(path.resolve('index.html'));
       }


}