'use strict';

const _     = require('lodash');
const utils = require('@frctl/fractal').utils;

module.exports = function(fractal) {

    return function(path) {

        if(!this.context._env || this.context._env.server) {
            return path;
        } else {
            const request = this.context._env.request || this.context._request;
            return utils.relUrlPath(path, _.get(request, 'path', '/'), fractal.web.get('builder.urls'));
        }

    }

};
