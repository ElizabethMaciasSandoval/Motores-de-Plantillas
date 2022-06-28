const contenedor = require('../contenedor');
const productos = new contenedor.Contenedor()

const getProducts = (req, res) =>{
  const products = productos.getAllProducts
  res.render('productos.ejs', {products})
}

const postProduct = (req, res) =>{
  const { title, price, thumbnail } = req.body
  productos.addProduct(title, price, thumbnail)
  res.redirect('/productos')
}

const renderForm = (req, res) =>{
  res.render('index.ejs')
}

module.exports = {
  getProducts,
  postProduct,
  renderForm
}