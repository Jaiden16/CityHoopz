const express = require('express');
const router = express.Router();
const db = require("../db/database.js")
const queries = require("../db/queries/queries")
const {loginRequired} = require("../auth/helpers")


/* GET users listing. */
// router.get('/',loginRequired , queries.GetAllUsers);
router.get('/', queries.GetAllUsers);
/*Get Single User */
router.get('/:id', queries.GetOneUser);
/*Get user Pic */
router.get('/picture/:id',queries.getUserPhoto)

module.exports = router;