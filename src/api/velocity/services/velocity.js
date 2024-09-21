'use strict';

/**
 * velocity service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::velocity.velocity');
