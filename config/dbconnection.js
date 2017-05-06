var Sequelize = require('sequelize');

var connection = new Sequelize('dailyscrum','root','koushik',{
    hostname : 'localhost',
	port : 3306,
	dialect : 'mysql'
});

module.exports = connection;