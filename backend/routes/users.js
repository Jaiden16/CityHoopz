const express = require('express');
const router = express.Router();
const db = require("./database.js")

const log = console.log;


//get all users
const GetAllUsers = async (req, res) => {
  try {
    let allUsers = await db.any("SELECT * FROM users")

    res.json({
      users: allUsers,
      message: "Success"
    })

  } catch (err) {
    res.json({
      message: `Error: ${err}`
    })
  }
}
//get one user
const GetOneUser = async (req, res) => {
  let insertQuery = `SELECT username, password FROM users WHERE id = '${req.params.id}'`
  try {
    let oneUser = await db.one(insertQuery)

    res.json({
      users: oneUser,
      message: "Success"
    })

  } catch (err) {
    res.json({
      message: `Error: ${err}`
    })
  }
}


const CreateUser = async (req, res) => {
  let userObject = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }

  let insertQuery = `Insert into users(username,password,email)
  VALUES($/username/,$/password/, $/email/) RETURNING *`

  try {

    if (req.body.username && req.body.password && req.body.email) {
      await db.one(insertQuery, userObject);
      res.json({
        user: `${req.body.username} & ${req.body.password}, ${req.body.email}`,
        message: "posted"
      })
    } else {
      res.json({
        message: "Information Missing"
      })
    }


  } catch (err) {

  }

}
/* GET users listing. */
router.get('/', GetAllUsers);
/*Get Single User */
router.get('/:id', GetOneUser);
/*Post User */
router.post('/', CreateUser);


module.exports = router;