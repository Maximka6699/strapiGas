'use strict';

/**
 * fdu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fdu.fdu');
