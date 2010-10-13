/*

# jQuery.rest API in 10 seconds or less:
$.rest.get,  $.rest.read,   $.rest.prototype.get,  $.rest.prototype.read
$.rest.post, $.rest.create, $.rest.prototype.post, $.rest.prototype.create
$.rest.put,  $.rest.update, $.rest.prototype.put,  $.rest.prototype.update
$.rest.del,  $.rest.delete, $.rest.prototype.del,  $.rest.prototype.delete

*/

var twttr = new $.rest("http://api.twitter.com/1", ".json", true);

twttr.get(["statuses", "show", 20], function (data) {  });
	// GET http://api.twitter.com/1/statuses/show/20.json

twttr.del(["statuses", "destroy", 20]);
	// DELETE http://api.twitter.com/1/statuses/destroy/20.json

twttr.post(["statuses", "update"], {status: "@ev Come here. I need you."});
	// POST http://api.twitter.com/1/statuses/update.json
	// status=%40ev%20Come%20here%2e%20I%20need%20you%2e
