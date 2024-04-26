const express = require('express')
const router = express.Router()
const studentmodel = require('../model/student');


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

    try {
        let student =  await studentmodel.find()
        res.send({ students: student });

    } catch (e) {
        res.send({ error: e });
    }

})

module.exports = router;
