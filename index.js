const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const { login } = require('./database/query');

const port = 3000;
var path = require('path');
const app = express();



app.use(session({ secret: '123' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.post('/login', async (req, res) => {
    const { usuario, senha } = req.body;
    const result = await login(usuario, senha);

    if (result.rows.length > 0) {
        res.render('logado', { usuario: result.rows, senha: result.rows });
        console.log(result.rows);
    } else {

        res.render('index');

    }
});


app.get('/', (req, res) => {
    if (req.session.usuario) {

        res.render('logado', { usuario: req.session.usuario });

    } else {

        res.render('index');

    }
});

app.listen(port, () => {

    console.log(`Server running on port ${port}`);

});
// ' OR '1'='1';--