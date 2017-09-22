'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = slugify;
function slugify(string) {
    // Convert camelCase to hyphen-case
    string = string.replace(/([a-z])([A-Z])/, function () {
        for (var _len = arguments.length, matches = Array(_len), _key = 0; _key < _len; _key++) {
            matches[_key] = arguments[_key];
        }

        return matches[1] + ' ' + matches[2].toLowerCase();
    });

    return string.replace(' ', '-').toLowerCase();
}