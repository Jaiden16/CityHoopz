const express = require('express');
const router = express.Router();
const db = require("../db/database.js")
const queries = require("../db/queries/queries")
const {loginRequired} = require("../auth/helpers")


/* GET users listing. */
router.get('/',loginRequired , queries.GetAllUsers);
/*Get Single User */
router.get('/:id', queries.GetOneUser);

module.exports = router;