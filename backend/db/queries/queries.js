const db = require("../database")


//get all users
const GetAllUsers = async (req, res) => {
  console.log(req.session)
  try {
    let allUsers = await db.any("SELECT id, username FROM users")

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

const getUserByUserName = async (username) => {
  let user = await db.oneOrNone("SELECT * FROM users Where username = $1 ", [username])
  return user;
}





module.exports = {
  GetAllUsers,
  GetOneUser,
  getUserByUserName
}