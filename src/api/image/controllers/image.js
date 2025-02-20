"use strict";

const stripe = require("stripe")(process.env.STRIPE_API_SECRET);
/**
 * image controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::image.image", ({ strapi }) => ({
  async buy(ctx) {
    try {
      const { status } = await stripe.charges.create({
        // desctructuring de la clef status de la réponse de stripe
        amount: ctx.request.body.amount * 100, // prix en centime
        currency: "eur", // devise
        description: `Paiement image : ${ctx.request.body.title}`, // identification de la commande
        source: ctx.request.body.token, // le token de stripe
      });

      return { status: status };
    } catch (error) {
      ctx.response.status = 500;
      return { message: error.message };
    }
  },
}));
