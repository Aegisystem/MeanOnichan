const Integrante = require("../modelos/integrantes");

const integranteCtrl = {};

integranteCtrl.getIntegrantes = async (req, res, next) => {
  const integrantes = await Integrante.find();
  res.json(integrantes);
};

integranteCtrl.createIntegrante = async (req, res, next) => {

  const integrante = new Integrante({
    ID_Integrante: req.body.ID_Integrante,
    nombre: req.body.nombre,
    edad: req.body.edad,
  });

  await integrante.save();
  res.json({ status: "Integrante created" });
};

integranteCtrl.getIntegrante = async (req, res, next) => {
  const { id } = req.params;
  const integrante = await integrante.findById(id);
  res.json(integrante);
};

integranteCtrl.editIntegrante = async (req, res, next) => {
  const { id } = req.params;
  await Integrante.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Integrante Updated" });
};

integranteCtrl.deleteIntegrante = async (req, res, next) => {
  await Integrante.findByIdAndRemove(req.params.id);
  res.json({ status: "Integrante Deleted" });
};

module.exports = integranteCtrl;