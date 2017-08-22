# fis3-postpackager-header
fis3 plugin, adding text to packaged resources' header

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