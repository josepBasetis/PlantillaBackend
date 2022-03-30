const { v4: uuidv4 } = require("uuid");
const models = require("../models");
const Colony = models.Colony;

//let colonies = require("../Colonies");

const getColonies = async (req, reply) => {
  await Colony.sync();
  const colonies = await Colony.findAll();
  reply.send(colonies);
};
const getColony = async (req, reply) => {
  await Colony.sync();
  const { id } = req.params;
  const item = await Colony.findByPk(id);
  reply.send(item);
};
const addColony = async (req, reply) => {
  await Colony.sync();
  const { name } = req.body;
  const { adress } = req.body;
  const { cats } = req.body;
  const { alimentador } = req.body;
  //const id = uuidv4();
  const item = await Colony.create({
    name: name,
    adress: adress,
    cats: cats,
    alimentador: alimentador,
  });

  reply.code(201).send(item);
};
const deleteColony = async (req, reply) => {
  await Colony.sync();
  const { id } = req.params;
  await Colony.destroy({ where: { id: id } });
  reply.send({ message: `Colony ${id} has been removed` });
};
const updateColony = async (req, reply) => {
  const { id } = req.params;
  const { name } = req.body;
  const { adress } = req.body;
  const { cats } = req.body;
  const { alimentador } = req.body;

  await Colony.sync();
  const item = await Colony.findByPk(id);
  item.name = name;
  item.adress = adress;
  item.cats = cats;
  item.alimentador = alimentador;
  await item.save();
  reply.send(item);
};
module.exports = {
  getColonies,
  getColony,
  addColony,
  deleteColony,
  updateColony,
};
