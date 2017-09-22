'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

require('colors');

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _msonToSchemas = require('./msonToSchemas');

var _msonToSchemas2 = _interopRequireDefault(_msonToSchemas);

var _schemasToFiles = require('./schemasToFiles');

var _schemasToFiles2 = _interopRequireDefault(_schemasToFiles);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(_package2.default.version);

_commander2.default.arguments('<input> <output> [options]').option('-o, --only <schemas...>', 'Only export certain schemas', function (schemas) {
    return schemas.split(',');
}).description('Convert an MSON file into JSON schemas').action(function (file, output) {
    output = _path2.default.resolve(output);
    (0, _helpers.ensureDirectory)(output);

    var contents = (0, _helpers.getFileContents)(file);
    if (!contents) {
        return process.exit(1);
    }

    (0, _msonToSchemas2.default)(contents).then(function (schemas) {
        schemas = (0, _helpers.filterByKey)(schemas, _commander2.default.only);

        return (0, _schemasToFiles2.default)(output, schemas).forEach(function (schema) {
            console.log('Created %s', schema.green);
        });
    });
});

_commander2.default.parse(process.argv);