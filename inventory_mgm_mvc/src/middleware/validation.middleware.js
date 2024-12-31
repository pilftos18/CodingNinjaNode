import {body, validationResult} from 'express-validator'

// HositedDeclarations  = a function that
// class
// assignment expression

const validateRequest = async (req, res, next) => { 
     console.log(req.body);
     //1. set rules for Validation
     const rules = [
          body('name').notEmpty().withMessage('Name is required'),
          body('desc').notEmpty().withMessage('Description is required'),
          body('price').isFloat({gt:0}).withMessage('Price must be a number'),
          
          body('imageUrl').custom((value, {req}) =>{
               if(!req.file){
                    throw new Error('Image is required');
               }
               return true;
          }),
     ];

     //2. run those rules
     await Promise.all(rules.map((rule) => rule.run(req))); 

     // 3. check if there are any errors after running the rules.
     var validationErrors = validationResult(req);

     // 4. if errros, return the error message
     if (!validationErrors.isEmpty()) {
          return res.render('new-product', {
          errorMessage:
          validationErrors.array()[0].msg,
          });
     }
     next();
};



// const validateRegister = async (req, res, next) => { 
//      console.log(req.body);
//      //1. set rules for Validation
//      const rules = [
//           body('name').notEmpty().withMessage('Name is required'),
//           body('email').notEmpty().withMessage('Description is required'),
//           body('password').notEmpty().withMessage('password'),
  
//      ];

//      //2. run those rules
//      await Promise.all(rules.map((rule) => rule.run(req))); 

//      // 3. check if there are any errors after running the rules.
//      var validationErrors = validationResult(req);

//      // 4. if errros, return the error message
//      if (!validationErrors.isEmpty()) {
//           return res.render('register', {
//           errorMessage:
//           validationErrors.array()[0].msg,
//           });
//      }
//      next();
// };






//Normal Validation
const validateRequestwithoutExpress = (req, res, next) =>{
     // validate Data
     const {name, price, imageUrl, desc} = req.body;
     let errors = [];

    if(!name || name.trim() == '') {
         errors.push('Name is required');
    }

    if(!price || parseFloat(price) <1) {
         errors.push(
             'Price must be a positive value'
           );
    }
         
    if(!desc || desc.trim() == '') {
         errors.push('Description is required');
    }

    try{
         const validUrl = new URL(imageUrl);
    }catch(err) {
        errors.push('URL is invalid');
    }

    if (errors.length > 0) {
        return res.render('new-product', {
        errorMessage: errors[0],
        });
    }

    next();
}

export default validateRequest;