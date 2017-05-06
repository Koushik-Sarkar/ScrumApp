var dbconnection = require("../config/dbconnection");
var user = require('../model/user');

var userDao = {
    getAllUser : function(){
            return new Promise(function(resolve,reject){
                dbconnection.authenticate()
                .then(function(){
                    user.findAll().then(function(users){
                        var userObjs = [];
                        users.forEach(function(eachUser){
                            userObjs.push(eachUser.dataValues);
                        });
                        resolve(userObjs);
                    }).catch(function(err){
                        reject({message : err});
                    });   
                })
                .catch(function(err){
                     console.log("unable to connect DB : "+err);
                     reject({message : err});
                });
            });
    },
    searchUser : function(searchString){
        console.log("in dao"+searchString);
        return new Promise(function(resolve,reject){
            dbconnection.authenticate()
            .then(function(){
                user.findAll({
                    where : {
                        user_email:{
                            $like : '%'+searchString+'%'
                        }
                    }
                })
                .then(function(data){
                    console.log(data);
                    var userObjs = [];
                    data.forEach(function(eachUser){
                        userObjs.push(eachUser);
                    });
                    resolve(userObjs);
                })
                .catch(function(err){
                    console.log("unable to get data : "+err);
                    reject({message : "An unexpected error occured"});
                });
            })
            .catch(function(err){
                console.log("unable to connect DB : "+err);
                     reject({message : "An unexpected error occured"});
            })
        });
    },
    addUser : function(newUser){
        return new Promise(function(resolve,reject){
            user.findOrCreate({
                where : {user_email : newUser.user_email},
                defaults : newUser
            })
            .spread(function(user,isCreated){
                if(isCreated)
                    resolve({message : 'New user has been created'});
                else   
                    resolve({message : 'User already exist'});
            })
            .catch(function(){
                reject({message : 'An error has occured'});
            });
        });
    }
}; 

module.exports = userDao;