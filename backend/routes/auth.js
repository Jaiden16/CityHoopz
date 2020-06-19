const express = require('express');
const router = express.Router();
const db = require('../db/database.js')
const authHelpers = require("../auth/helpers")
const passport = require('../auth/passport')

//sign up user
const signUp = async (req, res) => {

    let insertQuery = `Insert into users(username,password,email)
    VALUES($/username/,$/password/, $/email/) RETURNING username, email`

    try {
        const passwordDigest = await authHelpers.hashPassword(req.body.password)

        let userObject = {
            username: req.body.username,
            password: passwordDigest,
            email: req.body.email
        }

        if (req.body.username && req.body.password && req.body.email) {
            let newUser = await db.one(insertQuery, userObject);
            res.json({
                user: newUser,
                message: "posted"
            })
        } else {
            res.json({
                message: "Information Missing"
            })
        }
    } catch (err) {
        console.log("err", err)
        res.status(500)
            .json({
                user: null,
                message: "failure to sign up user"
            })
    }
}

const login = (req, res) => {
    console.log(req.body)
    res.json({
        payload: req.user,
        message: 'user logged in',
        err: false
    })
}



const logout = async (req, res) => {
    res.send("log out route")

}

/*Sign Up User*/
router.post('/signup', signUp)
router.post('/login',passport.authenticate('local') ,login)
router.get('/logout', logout)

module.exports = router;