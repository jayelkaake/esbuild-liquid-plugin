const fs = require('node:fs');

module.exports = {
    name: 'liquid',
    setup(build) {
        build.sideEffects = false;

        build.onResolve(
            { filter: /.*\.liquid$/ },
            (args) => {
                return {
                    path: `${ args.resolveDir }/${ args.path }`,
                    namespace: 'liquid',
                };
            }
        );

        build.onLoad({ filter: /.*\.liquid$/, namespace: 'liquid' }, (args) => {
            return {
                contents: JSON.stringify(fs.readFileSync(args.path, {encoding:'utf8', flag:'r'}).trim()),
                loader: 'json',
                watchFiles: [args.path],
            };
        });
    },
};
