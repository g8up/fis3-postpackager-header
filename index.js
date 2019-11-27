/**
 * @author g8up
 * @date 2017.8
 */
'use strict'

var _ = fis.util;

module.exports = function (ret, conf, settings, opt) {
  var header = settings.header;
  const exts = settings.exts || ['.js', '.css'];

  if (header) {
		_.map(Object.assign(ret.src, ret.pkg), function (subpath, file) {
      if( exts.includes(file.ext) ) {
        file.setContent( header + file.getContent() );
      }
    });
	}
}
