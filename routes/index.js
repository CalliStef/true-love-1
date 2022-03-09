const express = require('express')
const router = express.Router();
const bodyParser = require("body-parser")
const database = require("../databaseConnection");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.static("public"))

const getSession = (session) => {
  if (session.user_name) {
    return session;
  } else {
    return null;
  }
}

router.get("/", (req, res) => {
  let user = getSession(req.session)
  res.render('welcomeScreen', { user })
})

module.exports = router;