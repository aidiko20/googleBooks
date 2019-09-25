const axios = require("axios");
const router = require("express").Router();
const bookController = require("../controllers/bookController");

router.get("/books", (req, res) => {
  axios.get("https://www.googleapis.com/books/v1/volumes", {params: req.query })
  .then(({ data: {items } }) => res.json(items))
  .catch(err => res.status(422).json(err));
});

router.route("/saved")
    .get(bookController.findAll)
    .get(bookController.findById)
    .post(bookController.create);

router.route("/saved/:id")
.delete(bookController.remove);

module.exports = router;