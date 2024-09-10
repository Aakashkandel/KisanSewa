const express=require('express');
const RegisterController = require('../Controllers/RegisterController');
const LoginController = require('../Controllers/LoginController');
const TypesController=require('../Controllers/TypeController')
const { index } = require('../Controllers/Controller');
const CategoryController=require('../Controllers/CategoryContorller')
const UnitController =require('../Controllers/UnitController')
const SubsidyController=require('../Controllers/SubsidyController')
const AdminRegisterController=require('../Controllers/AdminRegisterController')



const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

const upload = multer({storage})


const router=express.Router();
const auth=require('../middleware/jwt');


router.get('/home',index);
router.post('/register',RegisterController.store);
router.post('/login',LoginController.login);

//category crud
router.post('/category',CategoryController.store)
router.get('/category',CategoryController.index)
router.get('/category/:id',CategoryController.edit)
router.put('/category/:id',CategoryController.update)
router.delete('/category/:id',CategoryController.destroy)

//types crud
router.post('/types',TypesController.store)
router.get('/types',TypesController.index)
router.get('/types/:id',TypesController.edit)
router.put('/types/:id',TypesController.update)
router.delete('/types/:id',TypesController.destroy)

//unit crud
router.post('/unit',UnitController.store)
router.get('/unit',UnitController.index)
router.get('/unit/:id',UnitController.edit)
router.put('/unit/:id',UnitController.update)
router.delete('/unit/:id',UnitController.destroy)


//product crud
router.post('/subsidy',upload.single('image'),SubsidyController.store)
router.get('/subsidy',SubsidyController.index)
router.get('/subsidy/:id',SubsidyController.edit)
router.put('/subsidy/:id',upload.single('image'),SubsidyController.update)
router.delete('/subsidy/:id',SubsidyController.destroy)



//admin route
router.get('/admin/register',AdminRegisterController.AdminRegister)


module.exports={router}