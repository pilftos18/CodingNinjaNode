import path from 'path';
import ProductModel from '../models/product.modal.js';

export default class ProductController{   
    getProduct(req,res){
        let products = ProductModel.get();
        // console.log(products);
        res.render('products',{products:products})
    }

    getAddForm(req,res){
        
        return res.render('new-product',{
            errorMessage: null,
        })
    }

    addnewProduct(req,res,next){
        // access data from form.
       // console.log('postbody',req.body);
       console.log('postbody', 'images/' + req.file.filename);
       const {name, desc, price} = req.body;
       const imageUrl = 'images/' + req.file.filename;
        ProductModel.add(name, desc, price, imageUrl)
        var products = ProductModel.get();
        return res.render('products',{products:products})
       
    }

    getProductUpdateView(req, res,next){
        //1. if product exists then return
        const id  = req.params.id;
       // console.log('chek',id);
        const productFound = ProductModel.getById(id);

        if(productFound){
            res.render('update-product',{product: productFound, errorMessage:null});
        }
           //2. else return error
        else{
            res.status(401).send('Product not found');
        }     
    };

    postUpdateProduct(req, res){
        console.log('postbody',req.body);
        ProductModel.update(req.body)
        let products = ProductModel.get();
        res.render('products',{products}) 
    }

    deleteProduct(req,res){
        const id  = req.params.id;
        console.log(id);
       const productFound = ProductModel.delete(id);
        console.log(productFound);
        
       if(!productFound){
            return res.status(401).send('Product not found');
       }
       let products = ProductModel.get();
        res.render('products',{products}) 
    }
}