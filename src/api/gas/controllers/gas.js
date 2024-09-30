'use strict';

/**
 * gas controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::gas.gas');
