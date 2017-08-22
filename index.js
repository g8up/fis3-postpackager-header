/**
 * @author g8up
 * @date 2017.8
 */
'use strict'

var _ = fis.util;

module.exports = function (ret, conf, settings, opt) {
	var header = settings.header;
	if (header) {
		_.map(ret.pkg, function (key, pkg) {
			pkg._content = header + pkg._content;
		});
	}
}
