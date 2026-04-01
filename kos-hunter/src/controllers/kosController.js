const prisma = require("../prisma/prisma.service");

exports.getKos = async (req, res) => {
  const data = await prisma.kos.findMany();
  res.json(data);
};

exports.createKos = async (req, res) => {
  const { nama, alamat, harga } = req.body;

  const kos = await prisma.kos.create({
    data: { nama, alamat, harga },
  });

  res.json(kos);
};

exports.getKosById = async (req, res) => {
  const id = parseInt(req.params.id);

  const kos = await prisma.kos.findUnique({
    where: { id },
  });

  res.json(kos);
};

exports.updateKos = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nama, alamat, harga } = req.body;

  const kos = await prisma.kos.update({
    where: { id },
    data: { nama, alamat, harga },
  });

  res.json(kos);
};

exports.deleteKos = async (req, res) => {
  const id = parseInt(req.params.id);

  await prisma.kos.delete({
    where: { id },
  });

  res.json({ message: "Kos deleted" });
};