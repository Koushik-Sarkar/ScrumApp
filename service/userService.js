var userDao = require('../dao/userDao');
var util = require('../utility/utilComonCheck');

var userService = {
    userSearchService : function(searchString){
        return new Promise(function(resolve,reject){
            if(util.isValidString(searchString)){
                 userDao.searchUser(searchString)
                .then(function(searchResult){
                    console.log(searchResult);
                     resolve(searchResult);   
                })
                .catch(function(err){
                    reject(err);
                });
            }
            else{
                reject({message:"invalid search string"})
            }
         });
      
        
    },
    allUserQueryService : function(){
        return new Promise(function(resolve,reject){
            userDao.getAllUser().then(function(user){
                resolve(user);
            }).catch(function(err){
                reject(err);
            });
        });
    },
    addUserService : function(newUser){
        return new Promise(function(resolve,reject){
            if(newUser){
                userDao.addUser(newUser)
                .then(result => resolve(result))
                .catch(err=>reject(err));
            }
            else{
                reject({message : 'undefined or no input'});
            }
        });
    }
};

module.exports = userService;