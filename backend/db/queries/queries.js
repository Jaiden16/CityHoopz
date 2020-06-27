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

const getUserPhoto = async (req,res) =>{
  // let url = 'http://localhost:3001/images/'
  let insertQuery = `SELECT picture FROM users 
  JOIN profile_picture ON users.id = profile_picture.id
  WHERE users.id = ${req.params.id}`
  // let link = url + req.file

  try{
    let data = await db.one(insertQuery)
    
    res.json({
      payload: data,
      msg: "success"
    })


  }catch(err){
    console.log(err)

  }
}





module.exports = {
  GetAllUsers,
  GetOneUser,
  getUserByUserName,
  getUserPhoto
}