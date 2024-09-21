'use strict';

/**
 * velocity router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::velocity.velocity');
