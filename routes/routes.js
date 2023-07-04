var express = require('express');
var router = express.Router();
var ctrlArticulos = require('../controller/operations');

// GET 
router.get('/', ctrlArticulos.findAll);
router.get('/price/:precio', ctrlArticulos.findByPrice);
router.get('/article/:nombre', ctrlArticulos.findByName);

// POST 
router.post('/insert/', ctrlArticulos.insertArticle);

// PUT
router.put('/updatePrice/:articulo', ctrlArticulos.updatePriceArticle);
router.put('/updateAmount/:articulo', ctrlArticulos.updateAmountArticle);

//DELETE
router.delete('/delete/:articulo', ctrlArticulos.deleteArticle);

module.exports = router;
