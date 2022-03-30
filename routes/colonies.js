const {
  getColonies,
  getColony,
  addColony,
  deleteColony,
  updateColony,
} = require("../controllers/Colonies");

//Item schema
const Colony = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    adress: { type: "string" },
    cats: { type: "number" },
  },
};

//Options for get all items
const getColoniesOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Colony,
      },
    },
  },
  handler: getColonies,
};
const getColonyOpts = {
  schema: {
    description: "get Colony by id",
    params: {
      id: {
        type: "string",
      },
    },
    response: {
      200: Colony,
    },
  },
  handler: getColony,
};
const postColonyOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    },
    response: {
      201: Colony,
    },
  },
  handler: addColony,
};
const deleteColonyOpts = {
  schema: {
    description: "delete Colony by id",
    params: {
      id: {
        type: "string",
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: deleteColony,
};
const updateColonyOpts = {
  schema: {
    description: "update Colony by id",
    body: Colony,
    params: {
      id: {
        type: "string",
      },
    },
    response: {
      200: Colony,
    },
  },
  handler: updateColony,
};
function itemRoutes(fastify, options, done) {
  //const collection = fastify.mongo.db.collection("test_collection");
  fastify.get("/", (req, reply) => {
    reply.send({ msg: "navigate to /Colonies to see all i have in the DB" });
  });
  //Get all items
  fastify.get("/Colonies", getColoniesOpts);

  //Get single item
  fastify.get("/Colonies/:id", getColonyOpts);
  //Add item
  fastify.post("/Colonies", postColonyOpts);
  //Delete item
  fastify.delete("/Colonies/:id", deleteColonyOpts);
  //Update item
  fastify.put("/Colonies/:id", updateColonyOpts);
  done();
}
module.exports = itemRoutes;
