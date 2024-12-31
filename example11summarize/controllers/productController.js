// Please don't change the pre-written code
// Import the necessary modules here

import ProductModel from "../models/ProductModel.js";

const productModel = new ProductModel();
export default class productController {
  index = (req, res) => {
    res.render("index", { products: productModel.getAllProducts() });
  };

  search = (req, res) => {
    // Write your code here
    // const { name } = req.body;  //another way to write code
    const productFound = productModel.searchResult(req.body.name);
    console.log(productFound);
    res.render('index',{products:productFound}) 
    

  };
}
