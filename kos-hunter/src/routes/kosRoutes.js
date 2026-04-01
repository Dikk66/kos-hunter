const express = require("express");
const router = express.Router();
const kosController = require("../controllers/kosController");

router.get("/kos", kosController.getKos);
router.post("/kos", kosController.createKos);
router.get("/kos/:id", kosController.getKosById);
router.put("/kos/:id", kosController.updateKos);
router.delete("/kos/:id", kosController.deleteKos);

module.exports = router;