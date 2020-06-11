module.exports = (factory, Models) => {
  factory.define("Author", Models.Author, {
    name: "Author Name",
    createdAt: new Date(),
    updatedAt: new Date()
  });
};
