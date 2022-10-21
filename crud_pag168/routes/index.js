var express = require('express');
const app   = require('../app');
var router  = express.Router();



/* GET home page. */
router.get('/', async function (req, res) {
  try {
    const results = await global.db.selectClientes();
    console.log(results);
    res.render('index', { results });
  }
  catch (error) {
    res.redirect('/?erro=' + error);
  }
  //res.render('index', { title: 'Express' });
})


/* GET new page. pág 210 */
router.get('/new', function (req, res, next) {
  res.render('new', { title: 'Cadastro de Cliente', result: {}, action: "/new" });
})



/* POST new page. */
router.post('/new', async function (req, res) {
  //salvar o cliente aqui pág 206
  const nome  = req.body.nome
  const idade = !req.body.idade ? null : parseInt(req.body.idade);
  const uf    = req.body.uf

  try {
    await global.db.insertCliente({ nome, idade, uf });
    res.redirect('/?new=true');
  }
  catch (error) {
    res.redirect('/?erro=' + error);
  }  
})



/* GET edit page. pág 209 */
router.get('/edit/:id', async function (req, res) {
  const id = parseInt(req.params.id);

  try {
    const result = await global.db.selectCliente(id);
    res.render('new', { title: 'Edição de Cliente', result, action: '/edit/' + id });
  }
  catch (error) {
    res.redirect('/?erro=' + error);
  }
});



/* GET delete page. A rota está sendo acessada via GET pois esta sendo chamada por um link*/
router.get('/delete/:id', async function (req, res) {
  const id = parseInt(req.params.id);

  try {
    await global.db.deleteCliente(id);
    res.redirect('/?delete=true');
  }
  catch (error) {
    res.redirect('/?erro=' + error);
  }
})


/* POST edit page. */
router.post('/edit/:id', async function (req, res) {
  const id    = parseInt(req.params.id);
  const nome  = req.body.nome;
  const idade = !req.body.idade ? null : parseInt(req.body.idade);
  const uf    = req.body.uf;

  try {
    await global.db.updateCliente(id, { nome, idade, uf });
    res.redirect('/?edit=true')
  }
  catch (error) {
    res.redirect('/?erro=' + error);
  }
})

module.exports = router;