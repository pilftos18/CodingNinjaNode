import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import UserController from './src/controllers/user.controller.js';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import validationMiddleware from './src/middleware/validation.middleware.js';
import { uploadFile } from './src/middleware/file-upload.middlware.js';
const server = express();   

server.use(express.urlencoded({ extended: true })); // when we add middleware here it will add same middleware to alls screens
server.use(express.static('public'));
//setup view engine settings
server.set('view engine','ejs');
server.set('views',path.join(path.resolve(),'src','views'));

//Create an instance of ProductController
server.use(ejsLayouts);
const productController = new ProductController();
const userController = new UserController();

server.get('/', productController.getProduct);
server.get('/new', productController.getAddForm);
server.post('/',uploadFile.single('imageUrl'), validationMiddleware, productController.addnewProduct);
server.get('/viewProduct/:id', productController.getProductUpdateView);

server.post('/viewProduct', productController.postUpdateProduct);

server.post('/delete-Product/:id', productController.deleteProduct);


// Register Routes///

server.get('/register', userController.getRegister);
server.post('/register', userController.postRegister);
server.get('/login', userController.getLogin);
server.post('/login', userController.postLogin);

server.use(express.static('src/views'));

server.listen(5000);



