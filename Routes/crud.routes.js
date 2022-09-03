const express = require('express');
const router = express.Router();
const multipart = require('connect-multiparty');
const path  = require('path')
const multipartMiddleware = multipart({uploadDir:path.join(__dirname,"image")});
const {getData,saveData,updateOneData,deleteOne} = require('../Controllers/crud.controller');

router.get('/',getData)
router.post('/save',multipartMiddleware,saveData)
router.put('/update',updateOneData)
router.delete('/delete/:id',deleteOne)

module.exports = router