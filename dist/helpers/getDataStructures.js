'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getDataStructures;
function findDataStructures(result) {
    if (!result.meta || !result.meta.classes || !result.meta.classes.includes('dataStructures')) {
        if (Array.isArray(result.content)) {
            return result.content.map(function (it) {
                return findDataStructures(it);
            }).filter(function (it) {
                return Boolean(it);
            })[0];
        }

        return null;
    }

    return result;
}

function getDataStructures(result) {
    return findDataStructures(result).content.map(function (entry) {
        return entry.content[0];
    });
}