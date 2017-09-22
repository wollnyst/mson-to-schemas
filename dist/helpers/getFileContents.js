'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getFileContents;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFileContents(file) {
    try {
        return _fs2.default.readFileSync(file).toString();
    } catch (error) {
        console.error('File "%s" does not exist'.red, file);
    }
}