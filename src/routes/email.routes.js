const { Router } = require("express");

const controladoremails = require ("../controllers/emails");
const router =Router();

router.post("/enviar",controladoremails.envio)

module.exports =router