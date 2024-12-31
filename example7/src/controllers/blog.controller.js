// Please don't change the pre-written code
// Import the necessary modules here
import {blogs} from '../models/blog.model.js'

export const renderBlogs = (req,res) => {
  // Write your code here
  let Blogs = blogs;
        console.log(Blogs);
        // res.render('products',{products:products})
  res.render('blogs', {blogs:Blogs});
};
export const renderBlogForm = (req,res) => {
 return res.render('addBlogForm');
};
export const addBlog = (req,res) => {
  console.log('postbody',req.body);
  // ProductModel.add(req.body);

  // let newBlog = new blogModel(
  //   products.length + 1,  // Generate unique ID for the new product
  //   productdata.name,
  //   productdata.desc, 
  //   productdata.price, 
  //   productdata.imageUrl
  //   );
    blogs.push(req.body);

  let Blogs = blogs;
  return res.render('blogs',{blogs:Blogs})
};
