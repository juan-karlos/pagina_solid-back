const { Router } = require("express");

const controladoremails = require ("../controllers/emails");
const router =Router();

router.post("/enviar",controladoremails.envio)
router.get("/conecta",controladoremails.prueba)

module.exports =router