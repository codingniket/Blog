const express = require("express");
const router = express.Router();

const local = {
  title: "Blog-Notes",
  description: "Made using NodeJS Express & MongoDB",
};

router.get("/", (req, res) => {
  // Passing data to ejs files
  res.status(200).render("index", { local });
});

router.get("/about", (req, res) => {
  res.status(200).render("about", { local });
});

module.exports = router;
