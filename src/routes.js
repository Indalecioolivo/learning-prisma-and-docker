const express = require("express");
const routes = express();
const { read, create, update, excluir } = require("./controllers/controllers");

routes.get("/", (req, res) => {
  res.send("serv on");
});
routes.get("/dev", read);
routes.post("/dev", create);
routes.put("/dev", update);
routes.delete("/dev", excluir);

module.exports = routes;
