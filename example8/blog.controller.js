// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here

  const { title, description, image } = req.body;
  let errors = {};

  // Title validation
  if (!title || title.trim() === "") {
    errors.title = "Title is required.";
  } else if (title.trim().length < 3) {
    errors.title = "Title must be at least 3 characters long.";
  }

  // Description validation
  if (!description || description.trim() === "") {
    errors.description = "Description is required.";
  } else if (description.trim().length < 10) {
    errors.description = "Description must be at least 10 characters long.";
  }

  // Image URL validation
  const urlRegex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
  if (!image || image.trim() === "") {
    errors.imageUrl = "Image URL is required.";
  } else if (!urlRegex.test(image)) {
    errors.image = "Image URL must be a valid URL.";
  }

  // If there are validation errors, re-render the form with error messages
  if (Object.keys(errors).length > 0) {
    return res.status(401).render("addBlog", { errors, success: false });
  }

  res.status(201).render("addBlog", { errors: null, success: true });
};


export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
