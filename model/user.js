var Sequelize = require('sequelize');
var connection = require('../config/dbconnection');
var user = connection.define('user_tbl',{
	    user_id:{
		    type : Sequelize.INTEGER,
		    primaryKey : true,
            autoIncrement: true
	    },
	    user_name:Sequelize.STRING,
	    user_title:Sequelize.STRING,
	    user_status:Sequelize.INTEGER,
	    user_email: Sequelize.STRING
    },{
	    timestamps: false,
	    paranoid: true,
	    freezeTableName: true
    });

module.exports = user;