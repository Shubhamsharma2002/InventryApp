import ProductModel from "../Model/ProductModel.js";
import UserModel from "../Model/UserModel.js";

export default class UserController{
    getRegister(req, res){
        res.render('register');
    }


    getLogin(req, res){
        res.render('login');
    }

    postregister(req,res){
        const {name,email,password} = req.body;
        console.log(req.body);
        UserModel.add(name,email,password);

        res.render('login');
    }

    postlogin(req,res){

        let product = ProductModel.get();
     
        const{email, password} = req.body;

        const user = UserModel.isValiduser(email, password);
        if(!user){
            res.send('invalid cred');
        }
        else{
            req.session.userEmail = email;
            res.render('product', {product});
        }
    }
}