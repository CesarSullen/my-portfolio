const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Saru's portfolio",
  });
});

router.get("/linktree", (req, res) => {
  res.render("linktree", {
    title: "Saru's Link Tree",
  });
});

router.get("/onlyfans", (req, res) => {
  res.render("onlyfans", {
    title: "Saru's OnlyFans",
  });
});

module.exports = router;
