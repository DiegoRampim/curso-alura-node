module.exports = function (app) {

    app.get('/', function (req, res) {

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results, fields){

            console.log("##ERRO: " + err);

            console.log("##RESULT: " + results);

            res.render('home/index', {livros : results});
        });

        connection.end();

    }); //app.get ('/')



}