import prisma from "../config/db.js";

// CREATE KOS
export const createKos = async (req, res) => {
  const { name, address, price, gender } = req.body;

  const kos = await prisma.kos.create({
    data: {
      name,
      address,
      price,
      gender,
      ownerId: req.user.id,
    },
  });

  res.json(kos);
};

// GET ALL KOS
export const getKos = async (req, res) => {
  const kos = await prisma.kos.findMany({
    include: { owner: true },
  });

  res.json(kos);
};

// UPDATE KOS
export const updateKos = async (req, res) => {
  const { id } = req.params;
  const { name, address, price } = req.body;

  const kos = await prisma.kos.update({
    where: { id: Number(id) },
    data: { name, address, price },
  });

  res.json(kos);
};

// DELETE KOS
export const deleteKos = async (req, res) => {
  const { id } = req.params;

  await prisma.kos.delete({
    where: { id: Number(id) },
  });

  res.json({ message: "Kos dihapus" });
};