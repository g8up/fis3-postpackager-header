# fis3-postpackager-header
![NPM](https://img.shields.io/npm/v/fis3-postpackager-header.svg)

a fis3 plugin, adding text to packaged resources' header

# Install
> npm install --global fis3-postpackager-header

# Usage
```javascript
const header = `/**
 * @author g8up
 * @mail g8up@qq.com
 */
`;

fis.media('production')
  .match('::package', {
    packager: fis.plugin('map', {
      'bundle.js': [
        'widget/**.js',
      ],
    }),
    postpackager: fis.plugin('header', {
      header,
    }),
  });
```