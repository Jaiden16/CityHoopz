const express = require('express');
const router = express.Router();
const db = require("./database.js")

const log = console.log;

//get all courts
const GetAllCourts = async (req,res) => {
  try{
    let allCourts = await db.any("SELECT * FROM courts")

    res.json({
      users: allCourts,
      message: "Success"
    })
  
  }catch(err){
    res.json({
      message:`Error: ${err}`
    })
  }
}

//get single court
const GetSingleCourt = async(req,res) => {
    try{
        let oneCourt = await db.one(`SELECT * FROM courts WHERE id = ${req.params.id}` )
        res.json({
            courts: oneCourt,
            message: 'Success'
        }) 

    }catch(err){
        res.json({
            message:`Error: ${err}` 
        })

    }
}



/* GET courts listing. */
//all courts
router.get('/', GetAllCourts);
//single court
router.get('/:id', GetSingleCourt);


module.exports = router;
