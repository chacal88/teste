var watch = require('@ionic/app-scripts/dist/watch');
var copy = require('@ionic/app-scripts/dist/copy');

// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'srcFiles' or 'copyConfig'
// then provide an object with the paths, options, and callback fields populated per the Chokidar docs
// https://www.npmjs.com/package/chokidar

module.exports = {
    srcFiles: {
        paths: [
            '{{SRC}}/**/*.(ts|html|s(c|a)ss)',
            // START: Custom Config....
            '{{SRC}}/../../../winker-components/**/*.(ts|html|s(c|a)ss)',
            '/myApp/**/*.(ts|html|s(c|a)ss)',
            '../winker-components/**/*.(ts|html|s(c|a)ss)',
            // END: Custom Config....
        ],
        options: {ignored: ['{{SRC}}/**/*.spec.ts', '{{SRC}}/**/*.e2e.ts', '**/*.DS_Store', '{{SRC}}/index.html']},
        callback: watch.buildUpdate
    },
    copyConfig: copy.copyConfigToWatchConfig()
};
