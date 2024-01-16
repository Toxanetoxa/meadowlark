const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const handlers = require('./lib/handler');

const app = express();
const port = process.env.PORT || 3040;

// Статичные данные
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));

// Использование шаблонизатора handlebars
app.engine('hbs', engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: 'views/layouts',
}));
app.set('view engine', '.hbs');
// Пользовательские страницы
app.get('/', handlers.home);
app.get('/about', handlers.about);

// Пользовательская страница 404/500
app.use(handlers.notFound);
app.use(handlers.serverError);

if (require.main === module) {
  app.listen(port, () => console.log(
    `Express запущен на http://localhost:${port}; нажмите Ctrl+C для завершения.`,
  ));
} else {
  module.exports = app;
}
