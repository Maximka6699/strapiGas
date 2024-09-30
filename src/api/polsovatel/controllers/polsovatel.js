"use strict";

/**
 * polsovatel controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::polsovatel.polsovatel",
  ({ strapi }) => ({
    async editScore(ctx) {
      const { id } = ctx.params;
      const { name } = ctx.params;
      const { amount } = ctx.request.body;

      const polsovatel = await strapi.entityService.findOne(
        "api::polsovatel.polsovatel",
        id
      );
      const newScore = polsovatel.score + amount;

      await strapi.entityService.update("api::polsovatel.polsovatel", id, {
        data: { score: newScore },
      });

      return { id, name, score: newScore };
    },
  })
);
