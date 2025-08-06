export default (app) => {
    app.get('/admin', (req, res) => {
        res.send('Área administrativa');
    });

    app.get('/formulario_inclusao_noticia', (req, res) => {
        res.render('admin/form_add_noticia');
    });
};