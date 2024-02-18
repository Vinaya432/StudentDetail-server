const express = require('express')
const router = express.Router()
const studentController =require('../Controller/studentController')
// const jwtMiddleware = require('../Middleware/jwtMiddleware')

router.post('/register',studentController.register)


router.get('/studentdetails',studentController.getStudentDetails)

module.exports=router