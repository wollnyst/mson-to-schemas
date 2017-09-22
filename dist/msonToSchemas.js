'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = msonToSchemas;

var _eidolon = require('eidolon');

var _eidolon2 = _interopRequireDefault(_eidolon);

var _protagonist = require('protagonist');

var _protagonist2 = _interopRequireDefault(_protagonist);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function msonToSchemas(input) {
    return new Promise(function (resolve) {
        _protagonist2.default.parse(input, function (errors, result) {
            var foundStructures = (0, _helpers.getDataStructures)(result);

            // Do a first pass to gather all data structures
            var dataStructures = {};
            foundStructures.forEach(function (structure) {
                dataStructures[structure.meta.id] = structure;
            });

            // Then convert all to JSON schemas
            var schemas = {};
            foundStructures.forEach(function (structure) {
                var schema = _eidolon2.default.schema(structure, dataStructures);

                // Add title and reorder properties
                schema = _extends({
                    $schema: schema.$schema,
                    title: structure.meta.id,
                    description: schema.description
                }, schema);

                // Trim some ends
                if (schema.description) {
                    schema.description = schema.description.trim();
                }

                var slug = (0, _helpers.slugify)(schema.title);
                schemas[slug] = schema;
            });

            resolve(schemas);
        });
    });
}