var SqlConPool = require("./SqlConPool");
function handle_request(msg, callback) {
    var query = "select username,firstname,lastname from kayakusers where username='"+msg.username+"'or firstname='"+msg.firstname+"'or lastname='"+msg.lastname+"';";
    SqlConPool.handle_request(query, function (result, error) {
        var res = {};
        if (error) {
            res.code = "400";
            callback(null, res);
        }
        else {

            if (result.length > 0) {
                res.code = "200";
                callback(null, res);
            }
            else {
                res.code = "400";
                callback(null, res);
            }
        }
    });
}

exports.handle_request = handle_request;
