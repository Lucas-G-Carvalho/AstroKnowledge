var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrarPontuacao(idUsuario, qtdacertos) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO Pontuacao (qtdacertos, datahora, fkUsuario, fkQuiz ) VALUES (${qtdacertos}, now(), ${idUsuario}, 1);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarPontuacao
};