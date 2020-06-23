module.exports = (factory, Models) => {
  factory.define("Author", Models.Author, {
    name: "Author Name",
    email: "user@mail.com",
    password: "password"
  });
};
