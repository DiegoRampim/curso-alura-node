var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function () {

    // node-database-cleaner
    // beforeEach(function (done){
	 //    var conn = express.infra.connectionFactory();
    //     conn.query("delete form produtos", function (ex, result) {
    //        if(!ex){
    //            done();
    //        }
    //     });
    //
    // });
	
	it('#listagem json', function (done) {

		request.get('/produtos')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done);

	});


	it('#cadastro novo produto - dados invalidos', function (done) {
		
		request.post('/produtos')
			.send({titulo:"", descricao:"novo livro"})
			.expect(400, done);


	});

	it('#cadastro novo produto - dados validos', function (done) {
		
		request.post('/produtos')
			.send({titulo:"livro", descricao:"novo livro", preco:12.50})
			.expect(302, done);

	});

});
