"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = filterByKey;
function filterByKey(object, keys) {
    if (!keys) {
        return object;
    }

    var filtered = {};
    Object.keys(object).forEach(function (key) {
        if (keys.includes(key)) {
            filtered[key] = object[key];
        }
    });

    return filtered;
}