'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = schemasToFiles;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function schemasToFiles(directory, schemas) {
    return Object.keys(schemas).map(function (key) {
        var contents = JSON.stringify(schemas[key], null, 4);
        var outputPath = _path2.default.join(directory, key + '.json');

        _fs2.default.writeFile(outputPath, contents);

        return outputPath;
    });
}