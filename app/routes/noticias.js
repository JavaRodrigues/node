export default (app) => {
    app.get('/noticias', (req, res) => {
        res.render('noticias/noticias');
    });
};