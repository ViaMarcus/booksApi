var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  const booksCollection = [{ title: "Dune" }, { title: "The Hobbit" }];
  res.json({ books: booksCollection });
});

module.exports = router;
