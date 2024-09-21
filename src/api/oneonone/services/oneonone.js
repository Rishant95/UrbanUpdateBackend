'use strict';

/**
 * oneonone service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::oneonone.oneonone');
