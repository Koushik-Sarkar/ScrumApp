var dbconnection = require("../config/dbconnection");
const userWiseQuery = "select * from UserWiseAnalysis";
const scrumDateWiseQuery = "select * from ScrumWiseAnalysis";

var analyticsDao = {
    userWise : function(){
        return dbconnection.query(userWiseQuery,callback);
    },
    scrumDateWise : function(searchString){
        return dbconnection.query(scrumDateWiseQuery,callback);
    }
};

module.exports = analyticsDao;