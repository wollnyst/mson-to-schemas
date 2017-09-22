'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ensureDirectory;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DIRECTORY_NOT_FOUND = -2;

function ensureDirectory(path) {
    try {
        _fs2.default.statSync(path);
    } catch (error) {
        if (error.errno === DIRECTORY_NOT_FOUND) {
            console.log('%s does not exist, creating it', path.grey);
            _fs2.default.mkdir(path);
        }
    }
}