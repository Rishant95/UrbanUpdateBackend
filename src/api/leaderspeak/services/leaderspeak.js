'use strict';

/**
 * leaderspeak service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leaderspeak.leaderspeak');
