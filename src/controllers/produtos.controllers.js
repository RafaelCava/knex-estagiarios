const knex = require('../db/conexao');
class ProdutosControllers {

  constructor() {
    this.conexao = knex;
  }
  async create(req, res) {
    const {
      nome,
      bar_code
    } = req.body;
    const produtos = await this.conexao('produtos').insert({
      nome,
      bar_code
    }).debug()
    return res.status(201).json(produtos)
  }
  async getAll(req, res) {
    const produtos = await this.conexao('produtos').debug();
    return res.status(200).json(produtos);
  }
  async getOne(req, res) {
    const { id } = req.body;
    const produtos = await this.conexao('produtos').where('id', id).first().debug();
    return res.status(200).json(produtos);
  }

  async deleteOne(req, res) {
    const { id } = req.body;
    const produtos = await this.conexao('produtos').del().where('id', id).debug();
    return res.status(200).json(produtos);
  }
}
module.exports = ProdutosControllers;