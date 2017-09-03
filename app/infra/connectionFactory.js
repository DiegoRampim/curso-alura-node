
var mysql = require('mysql');

function createDBConnection() {

        return 	mysql.createConnection({
            host : '45.33.101.25',
            port : '2525',
            user : 'alura',
            password : 'alura',
            database : 'alura'
        });



        // return 	mysql.createConnection({
        //     host : 'localhost',
        //     user : 'root',
        //     password : 'root',
        //     database : 'casadocodigo'
        // });


}


module.exports = function () {
	return createDBConnection;
}

		
