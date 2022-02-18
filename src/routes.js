const express = require('express');
const UsuariosControllers = require('./controllers/usuarios.controller');
const ProdutosControllers = require('./controllers/produtos.controller');
const routes = express();
const usuariosController = new UsuariosControllers();
const produtosController = new ProdutosControllers();

routes.get('/', (req, res) => {
  return res.status(200).json("Hello world!!")
})

routes.post('/usuarios', (req, res) => {
  usuariosController.create(req, res)
});

routes.get('/usuarios', (req, res) => {
  usuariosController.getAll(req, res)
});

routes.delete('/usuarios', (req, res) => {
  usuariosController.deleteOne(req, res)
});

routes.get('/usuarios/one', (req, res) => {
  usuariosController.getOne(req, res)
});

routes.post('/produtos', (req, res) => {
  produtosController.create(req, res)
});

routes.get('/produtos', (req, res) => {
  produtosController.getAll(req, res)
});
routes.delete('/produtos', (req, res) => {
  produtosController.deleteOne(req, res)
});

routes.get('/produtos/one', (req, res) => {
  produtosController.getOne(req, res)
});
module.exports = routes;