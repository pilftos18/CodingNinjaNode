// Please don't change the pre-written code
// Import the necessary modules here
import  {body,validationResult }  from 'express-validator';

export const formValidation = async (req, res, next) => {
  // Write your code here
  //1. set rules for Validation
 const rules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Enter a valid email'),
  body('profileImage').custom((value, { req }) => {
      if(!req.file){
        throw new Error('Profile image is required');
      }else{
        return true;
      }
  })
 ];

   //2. run those rules
   await Promise.all(rules.map((rule) => rule.run(req))); 

    // 3. check if there are any errors after running the rules.
    var validationErrors = validationResult(req);

    // 4. if errros, return the error message
    if (!validationErrors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: validationErrors.array().map((error) => ({
          field: error.param,
          message: error.msg,
        })),
      });
    }
   next();


};
