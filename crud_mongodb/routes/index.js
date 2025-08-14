import express from 'express';
import db from '../db.js';

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const customers = await db.find({});
    res.render('index', {
      title: 'Cadastro de Clientes',
      Listagem: 'Clientes Atuais',
      result: customers
    });
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    next(error); // Passa o erro para o manipulador de erros do Express
  }
});

/* POST para salvar um novo cliente. */
router.post('/save', async (req, res, next) => {
  const customer = req.body;
  try {
    await db.insert(customer);
    res.redirect('/');
  } catch (error) {
    console.error('Erro ao salvar cliente:', error);
    next(error);
  }
});

/* POST para editar um cliente. */
router.post('/edit', async (req, res, next) => {
  const { id, nome, age } = req.body;
  try {
    await db.update(id, { nome, age });
    res.redirect('/');
  } catch (error) {
    console.error('Erro ao editar cliente:', error);
    next(error);
  }
});

/* POST para excluir um cliente. */
router.post('/delete', async (req, res, next) => {
  const { id } = req.body;
  try {
    await db.remove(id);
    res.redirect('/');
  } catch (error) {
    console.error('Erro ao excluir cliente:', error);
    next(error);
  }
});

export default router;
