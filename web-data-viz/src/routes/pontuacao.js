var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController")

router.post("/cadastrar", function (req, res) {
    pontuacaoController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    pontuacaoController.listar(req, res);
});

module.exports = router;