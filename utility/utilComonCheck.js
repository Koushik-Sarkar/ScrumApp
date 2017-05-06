const unallowedChar = /[\s\[\](){}&\'\'%$#!*\/\\]/gi;

var util = {
    isValidString : function(value){
        if(value){
           if(unallowedChar.test(value)){
               return false;
           }
           else{
               return true;
           } 
        }
        return false;
    },
    isValidUserInput : function(user){
        if(user){
            if(user.length==1){
                return true;
            }
            return false;
        }
        return false;
    }
};

module.exports = util;