    # jQuery.rest API in 10 seconds or less:

    # $.rest.get,  $.rest.read,   $.rest.prototype.get,  $.rest.prototype.read
    # $.rest.post, $.rest.create, $.rest.prototype.post, $.rest.prototype.create
    # $.rest.put,  $.rest.update, $.rest.prototype.put,  $.rest.prototype.update
    # $.rest.del,  $.rest.delete, $.rest.prototype.del,  $.rest.prototype.delete


    var twttr = new $.rest("http://api.twitter.com/1", ".json", true);

    $.rest.get("http://api.twitter.com/1/statuses/show/20.json", function (data) { });
    twttr.get(["statuses", "show", 20], function (data) { });
    	// GET http://api.twitter.com/1/statuses/show/20.json

    $.rest.del("http://api.twitter.com/1/statuses/destroy/20.json", function (data) { });
    twttr.del(["statuses", "destroy", 20]);
    	// DELETE http://api.twitter.com/1/statuses/destroy/20.json

    var status = {status: "@ev Come here. I need you."};
    $.rest.post("http://api.twitter.com/1/statuses/update.json", status);
    twttr.post(["statuses", "update"], status);
    	// POST http://api.twitter.com/1/statuses/update.json
    	// status=%40ev%20Come%20here%2e%20I%20need%20you%2e
