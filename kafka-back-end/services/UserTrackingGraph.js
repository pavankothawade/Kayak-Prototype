    var mongo = require("./mongo");
var MongoConPool=require("./MongoConPool");
var mongoURL = "mongodb://localhost:27017/KAYAK";

function handle_request(msg, callback){

    var res = {};
    var i=0;
    try {

        var queryJson={username: msg.username};

        MongoConPool.find('UserTracking',queryJson,function(err, details){
            if (err) {
                res.code = "401";
                res.value = "UserTracks details fetch unsuccessful";
                callback(null, res);
            }
            else {
                var resArr = [];
                resArr = details.map(function (file) {
                    var detailsJSON = {};
                    //detailsJSON.username=details[i].username;
                    detailsJSON.Pagename = details[i].Pagename;
                    //detailsJSON.sessionid=details[i].sessionid;
                    detailsJSON.Date=details[i].Date;
                    if(i==0)
                    detailsJSON.seconds=0;
                    else {

                   var d1=new Date(details[i-1].Date);
                   var d2=new Date(details[i].Date);
                        detailsJSON.seconds = (d2.getTime()-d1.getTime())/1000;

                    }
                    i=i+1;
                    return detailsJSON;
                });
                res.code = "200";
                res.value = "UserTracks details Successful";
                res.arr=resArr;
                callback(null, res);
            }
        });

    }
    catch (e){
        res.code = "401";
        res.value = "UserTracks details fetch unsuccessful";
        callback(null, res);
    }

}

exports.handle_request = handle_request;