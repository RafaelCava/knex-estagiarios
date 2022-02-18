const express = require('express');
const UsuariosControllers = require('./controllers/usuarios.controller');
const produtosControllers = require('./controllers/produtos.Controller');
const routes = express();
const usuariosController = new UsuariosControllers();
const produtosController = new produtosControllers();

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

module.exports = routes;