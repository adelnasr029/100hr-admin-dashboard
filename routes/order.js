const express = require('express')
const router = express.Router()
const orderController = require('../controllers/order')
const authController = require("../controllers/auth");


//Admin feature to add menu items to website 
router.get('/', orderController.getOrder)
router.put('/complete/:id', orderController.markComplete)


//Routes for user Login/signup
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router 