const { Router } = require('express');
const router = Router();
const { getProducts, postProduct, renderForm } = require('../controllers/controller');

router.get('/productos', getProducts)
router.get('/crear', renderForm)
router.post('/productos', postProduct)

module.exports = router;