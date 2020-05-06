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
  try {
    let oneUser = await db.any("SELECT * FROM users WHERE id = $1", [req.params.id])

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



//get all skills
const GetAllSkills = async (req, res) => {
  try {
    let allSkills = await db.any("SELECT * FROM skills")

    res.json({
      users: allSkills,
      message: "Success"
    })

  } catch (err) {
    console.log(err)
    res.json({
      message: `Error: ${err}`
    })
  }
}

//get one skill
const GetOneSkill = async (req, res) => {
  try {
    let oneSkill = await db.one("SELECT * FROM skills WHERE id = $1", [req.params.id])

    res.json({
      users: oneSkill,
      message: "Success"
    })

  } catch (err) {
    res.json({
      message: `Error: ${err}`
    })
  }
}


//patch skill

const PatchUser = async (req, res) => {
  try {
    let patch;
    let userUpdates = {
      id: req.params.id,
      shooting: parseInt(req.body.shooting),
      handle: parseInt(req.body.handle),
      perimiter_defence: parseInt(req.body.perimiter_defence),
      interior_defence: parseInt(req.body.interior_defence)
    }

    let query = `UPDATE skills SET `;
    let endQuery = `WHERE id  = $/id/ RETURNING *`

    if (req.body.shooting) {
      query += `shooting = $/shooting/, `
    }


    if (req.body.handle) {
      query += `handle = $/handle/, `
    }

    if (req.body.perimiter_defence) {
      query += `perimiter_defence = $/perimiter_defence/, `
    }
    
    indx = query.lastIndexOf(',')

    if (query[indx] === ","){
      let lastIndex = query.lastIndexOf(',');
      let newString = query.substring(0,lastIndex)
      console.log("114",newString)
      query = newString
    }

    let fullQuery = query + endQuery
    patch = await db.one(fullQuery, userUpdates);



    // console.log("second " + fullQuery)
    res.json({
      data: patch,
      message: "success"
    })

  } catch (err) {
    console.log(err)
    res.json({
      message: `Error: ${err}`
    })
  }


}


/* GET users listing. */
router.get('/', GetAllUsers);
router.get('/skills', GetAllSkills);
router.get('/:id', GetOneUser);
router.get('/skills/:id', GetOneSkill);
router.patch('/skills/:id', PatchUser);

module.exports = router;
