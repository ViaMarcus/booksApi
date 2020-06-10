module.exports = (factory, Models) => {
  factory.define("Book", Models.Book, {
    title: "Book Title",
  });
};
