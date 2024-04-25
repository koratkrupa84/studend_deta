const express = require('express')
const router = express.Router()
const studentmodel = require('../model/student');
// const { error } = require('console');

// Add routes
router.post('/add', async (req, res) => {

    try {

        await studentmodel(req.body).save();
        res.send({ message: "student added...." });

    } catch (e) {

        res.send({ errorMessage: e.errorResponse.errmsg });

    }
})


router.get('/', async (req, res) => {
    // try {
    //     let studentList = await studentmodel.find();
    //     res.send({ student: studentList });
    // } catch (e) {
    //     res.send({ error: e });
    // }

    res.send({message : "hiiii......"})
})

module.exports = router;
