var express = require('express');
var router = express.Router();

const BukuController = require('../app_server/controller/buku');
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond dari BUKU router');
// });
  

//format JSON
//insert
router.post('/',BukuController.createdBuku);

//read/select data
router.get('/',BukuController.readBuku);

//delete data
router.delete('/:id',BukuController.deleteBuku);

//update data
router.put('/:id',BukuController.updateBuku);   

module.exports = router;