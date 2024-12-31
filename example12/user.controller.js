export const renderUploadForm = (req, res) => {
  res.render("upload-form", { user: null });
};

export const registerUser = (req, res) => {
  const { name, email } = req.body;
  const profileImage =   req.file.filename;;
  res.status(201).render("upload-form", { user: { name, email, profileImage } });
};
