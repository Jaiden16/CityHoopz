const express = require('express');
const router = express.Router();
const db = require("../db/database.js")

const log = console.log;

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
            interior_defence: parseInt(req.body.interior_defence),
            rebounding: parseInt(req.body.rebounding),
            steals: parseInt(req.body.steals),
            blocks: parseInt(req.body.blocks),
            iq: parseInt(req.body.iq),
            leadership: parseInt(req.body.leadership)
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

        if (req.body.interior_defence) {
            query += `interior_defence = $/interior_defence/, `
        }

        if (req.body.rebounding) {
            query += `rebounding = $/rebounding/, `
        }

        if (req.body.steals) {
            query += `steals = $/steals/, `
        }

        if (req.body.blocks) {
            query += `blocks = $/blocks/, `
        }

        if (req.body.iq) {
            query += `iq = $/iq/, `
        }

        if (req.body.leadership) {
            query += `leadership = $/leadership/, `
        }

        indx = query.lastIndexOf(',')

        if (query[indx] === ",") {
            let lastIndex = query.lastIndexOf(',');
            let newString = query.substring(0, lastIndex)
            console.log("114", newString)
            query = newString
        }

        let fullQuery = query + endQuery
        patch = await db.one(fullQuery, userUpdates);



        log("patch ", patch)
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

router.get('/', GetAllSkills);
router.get('/:id', GetOneSkill);
router.patch('/:id', PatchUser);

module.exports = router;