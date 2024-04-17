const express = require('express')
const router = express.Router()
const studentmodel = require('../model/student');
const { error } = require('console');
const student = require('../model/student');

// Add routes
router.post('/add', async (req, res) => {

    try {

        const result = await studentmodel(req.body).save();
        
        res.send({ message: "student added...." });
    } catch (e) {

        if (e.keyValue.email == 1) {
            res.send({ errorMessage: "email is already exist...!" });
        } else {
            res.send({ errorMessage: e.errorResponse.errmsg });
        }

    }
})


router.get('/', async (req, res) => {
    try{
        let studentList = await studentmodel.find();
        res.send({student :studentList});
    }catch(e){
        res.send({error:e});
    }
})

module.exports = router;
