'use strict';

/**
 * gas service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gas.gas');
