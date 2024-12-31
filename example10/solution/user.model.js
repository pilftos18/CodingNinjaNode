export const users = [
  {
    id: 1,
    name: "coding ninjas",
    email: "ninja@gmail.com",
    image: "https://entrackr.com/storage/2022/10/Coding-Ninjas.jpg",
  },
];

export const updateUsers = (user) => {
  const { id } = user;
  const userToUpdateIndex = users.findIndex((user) => {
    return user.id === parseInt(id);
  });
  if (userToUpdateIndex > -1) {
    users.splice(userToUpdateIndex, 1, user);
    return users[userToUpdateIndex];
  } else {
    return false;
  }
};
