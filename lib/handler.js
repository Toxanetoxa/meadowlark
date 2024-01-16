const fortune = require('./fortune');

exports.home = (req, res) => res.render('home');
exports.about = (req, res) => res.render('about', { fortune: fortune.getFortune() });
exports.notFound = (req, res) => res.status(404).render('404');
// Express распознает обработчик ошибок по его четырем аргументамj
// поэтому нам нужно отключить правило no-unused-vars в ESLint.
/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.status(500).render('500');
/* eslint-enable no-unused-vars */
