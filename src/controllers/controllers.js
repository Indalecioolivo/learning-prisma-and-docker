const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const read = (req, res) => {
  res.json("rota get");
};

const create = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        ...req.body,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

const update = (req, res) => [res.json("rota put")];

const excluir = (req, res) => {
  res.json("rota delete");
};

module.exports = { read, create, update, excluir };
