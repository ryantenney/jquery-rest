;(function ($) {

var

	_undefined,

	_slice = Array.prototype.slice,
	_partial = function (fn) {
		var args = _slice.call(arguments, 1);
		return function () {
			return fn.apply(this, args.concat(_slice.call(arguments)));
		};
	},

	verbs = {
		"GET"    : [ "get"  , "retrieve" ],
		"POST"   : [ "post" , "create"   ],
		"PUT"    : [ "put"  , "update"   ],
		"DELETE" : [ "del"  , "delete"   ]
	},

	$rest = $.rest = function (url, ext, jsonp) {
		if (this instanceof $rest) {
			this.url_   = url;
			this.ext_   = ext || "";
			this.jsonp_ = jsonp ? "jsonp" : false;
		}
	},

	$restProto = $rest.prototype,

	buildUrl = function (obj, urlParts) {
		var url = obj.url_;

		if (url.substr(-1) != "\/") {
			url += "\/";
		}

		if (urlParts) {
			if (typeof urlParts == "string") {
				url += encodeURI(urlParts);
			} else {
				var arr = [], i = 0, l = urlParts.length;
				for (; l > i; ++i) {
					if (urlParts[i] != _undefined) {
						arr.push(encodeURIComponent("" + urlParts[i]));
					}
				}
				url += arr.join("\/");
			}
			url += obj.ext_;
		}

		return url;
	},

	$ajax = function (type, url, data, success, dataType) {
		if (typeof data == "function") {
			dataType = dataType || success;
			success = data;
			data = null;
		}

		return $.ajax({
			url:      url,
			type:     type,
			dataType: dataType,
			success:  success,
			data:     data
		});
	},

	_ajax = function (type, urlParts, data, success, dataType) {
		return $ajax(type, buildUrl(this, urlParts), data, success, this.jsonp_ || dataType);
	};

	for (var key in verbs) {
		if (verbs.hasOwnProperty(key)) {
			var val = verbs[key], v0 = val[0], v1 = val[1];
			$rest[v0]      = $rest[v1]      = _partial($ajax, key);
			$restProto[v0] = $restProto[v1] = _partial(_ajax, key);
		}
	}

}(jQuery));