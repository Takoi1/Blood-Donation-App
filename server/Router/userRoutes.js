const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage });
router.post('/signup',upload.single('pdfFile'),userController.signup);
router.post('/login', userController.login);
router.delete('/deleteAllUsers', userController.deleteall);
router.get('/getUser/:id', userController.getById);
router.post('/createUser', userController.create);
router.get('/getAllUser', userController.read);
router.put('/updateOneUser/:id', userController.update);
router.delete('/deleteUser/:id', userController.delete);
router.get('/accepted', userController.getAllAcceptedUsers);
router.get('/unapproved', userController.getAllUnapprovedUsers);


module.exports = router;
