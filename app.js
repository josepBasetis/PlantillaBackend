"use strict";

const fastify = require("fastify");

const models = require("./models");
const City = models.City;

function build(opts = {}) {
  const app = fastify(opts);
  app.get("/Cities", async function (request, reply) {
    await City.sync();

    const cities = await City.findAll();

    return { cities };
  });
  /*app.get("/Cities/:id", async function (request, reply) {
    await City.sync();
    const { id } = request.params;
    const cities = await City.findAll();
    const city = cities.find((it) => it.id === id);
    //reply.send(city);
    return { city };
  });*/

  return app;
}

module.exports = build;
