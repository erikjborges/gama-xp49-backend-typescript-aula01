"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mensagem_1 = require("./mensagem");
function imprimeMensagem(texto) {
    console.log('Esta é minha mensagem: ' + texto);
    return 1;
}
imprimeMensagem((0, mensagem_1.mensagem)());
/**
 * Tipos básicos
 */
//string
var nome = 'Erik';
console.log("Tipo basico: ".concat(typeof nome));
var sobrenome = 'Borges';
console.log("Tipo basico: ".concat(typeof sobrenome));
function concatenaStr(texto1, texto2) {
    return "".concat(texto1, " ").concat(texto2);
}
var nomeCompleto = concatenaStr(nome, sobrenome);
console.log("Tipo basico: ".concat(typeof nomeCompleto, " ").concat(nomeCompleto));
//number
var n1 = 2;
var n2 = 3.2;
console.log("Tipo basico: ".concat(typeof n1, " (").concat(n1, ")"));
console.log("Tipo basico: ".concat(typeof n2, " (").concat(n2, ")"));
var somaN = function (num1, num2) { return num1 + num2; };
var soma = somaN(n1, n2);
console.log("Tipo basico: ".concat(typeof soma, " (").concat(soma, ")"));
//boolean
var b1 = true;
var b2 = false;
console.log("Tipo basico: ".concat(typeof b1, " (").concat(b1, ")"));
console.log("Tipo basico: ".concat(typeof b2, " (").concat(b2, ")"));
var funcaoAnd = function (bool1, bool2) {
    return bool1 && bool2;
};
var resultadoAnd = funcaoAnd(b1, b2);
console.log("Tipo basico: ".concat(typeof resultadoAnd, " (").concat(resultadoAnd, ")"));
// any e void
var value = 123;
console.log("Tipo basico: ".concat(typeof value, " (").concat(value, ")"));
value = 'teste';
console.log("Tipo basico: ".concat(typeof value, " (").concat(value, ")"));
function imprimeRetorna(val) {
    console.log("Tipo basico: ".concat(typeof val, " (").concat(val, ")"));
    return val;
}
function imprimeNaoRetorna(val) {
    console.log("Tipo basico: ".concat(typeof val, " (").concat(val, ")"));
}
imprimeRetorna(value);
imprimeNaoRetorna(value);
/**
 * Tipo Array
 */
var verduras = ['couve', 'alface', 'almerao'];
var frutas = ['maca', 'laranja', 'banana', 'pitaia'];
var notas = [10, 20, 30];
console.log("Tipo array: ".concat(typeof verduras, " (").concat(verduras, ")"));
console.log("Tipo array: ".concat(typeof frutas, " (").concat(frutas, ")"));
console.log("Tipo array: ".concat(typeof notas, " (").concat(notas, ")"));
var alteraArray = function (lista) {
    var novaLista = [];
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var valor = lista_1[_i];
        novaLista.push("".concat(valor, " verde"));
    }
    return novaLista;
};
var listaAlterada = alteraArray(verduras);
console.log("Tipo array: ".concat(typeof listaAlterada, " (").concat(listaAlterada, ")"));
/**
 * Tipo Tupla
 */
var endereco1 = ['Rua do forro', 123, 'Bairro da Limoeira'];
var endereco2 = ['Rua do forro', '123', 'Bairro da Limoeira']; // Nao eh tupla
console.log("Tipo tupla: ".concat(typeof endereco1, " (").concat(endereco1, ")"));
console.log("Tipo NAO tupla: ".concat(typeof endereco2, " (").concat(endereco2, ")"));
var modificaEndereco = function (endereco) {
    if (endereco[0] == 'Rua do forro')
        endereco[0] = 'Rua do pagode';
    return endereco;
};
var enderecoNovo = modificaEndereco(endereco1);
console.log("Tipo tupla: ".concat(typeof enderecoNovo, " (").concat(enderecoNovo, ")"));
/**
 * Tipo Object
 */
var cliente = {
    nome: 'Joao',
    "sobrenome": "Do pe de feijao"
};
var produto = {
    descricao: 'Camisa do Fluminense',
    preco: 100.50,
    vendido: false
};
console.log("Tipo objeto: ".concat(typeof cliente, " (").concat(cliente, ")"));
console.log("Tipo objeto: ".concat(typeof produto, " (").concat(produto, ")"));
// const imprimeRetornaDadosCliente = (objeto: { nome: string, sobrenome: string }): { nome: string, sobrenome: string } => {
//     console.log(objeto);
//     return objeto;
// }
// imprimeRetornaDadosCliente(cliente);
/**
 * Tipo never
 */
// function lancaExcecao(): never {
//     throw new Error('Testanto tipo never');
// }
// const nunca = lancaExcecao();
// console.log(`Tipo never: ${typeof nunca} (${nunca})`);
function verificaNumero(numero) {
    if (typeof numero === 'number') {
        return true;
    }
    else {
        return numero;
    }
}
var verNumero = verificaNumero(10);
console.log("Tipo never: ".concat(typeof verNumero, " (").concat(verNumero, ")"));
/**
 * Union types
 */
var id = 1000;
var imprimeId = function (codigo) {
    console.log("Union types: ".concat(typeof codigo, " (").concat(codigo, ")"));
    return codigo;
};
imprimeId(id);
// narrowing
var imprimeCodigo = function (codigo) {
    if (typeof codigo === 'string')
        console.log("Union types: ".concat(typeof codigo, " (").concat(codigo.toUpperCase(), ")"));
    else
        console.log("Union types: ".concat(typeof codigo, " (").concat(codigo, ")"));
};
imprimeCodigo(1000);
imprimeCodigo('teste');
/**
 * Tipo enum
 */
var Status;
(function (Status) {
    Status["Pendente"] = "A";
    Status["Processando"] = "B";
    Status["Processado"] = "C";
})(Status || (Status = {}));
;
var situacao1 = Status.Processando;
var situacao2 = Status.Processando;
console.log("Tipo Enum: ".concat(typeof situacao1, " (").concat(situacao1, ")"));
console.log("Tipo Enum: ".concat(typeof situacao2, " (").concat(situacao2, ")"));
var mudaStatus = function (preStatus) {
    var posStatus;
    switch (preStatus) {
        case Status.Pendente:
            posStatus = Status.Processando;
            break;
        case Status.Processando:
            posStatus = Status.Processado;
            break;
        default:
            posStatus = Status.Pendente;
    }
    return posStatus;
};
var novoStatus = mudaStatus(situacao1);
console.log("Tipo Enum: ".concat(typeof novoStatus, " (").concat(novoStatus, ")"));
var cliente1 = {
    nome: "Joao",
    sobrenome: "Do pe de feijao"
};
var produto1 = {
    descricao: 'Camisa do Fluminense',
    preco: 100.50,
    vendido: false
};
console.log("Type ALias: ".concat(typeof cliente1, " (").concat(cliente1, ")"));
console.log("Type ALias: ".concat(typeof produto1, " (").concat(produto1, ")"));
// const imprimeRetornaDadosCliente = (objeto: Cliente): Cliente => {
//     console.log(objeto);
//     return objeto;
// }
var imprimeRetornaDados = function (objeto) {
    console.log(objeto);
    return objeto;
};
imprimeRetornaDados(cliente1);
imprimeRetornaDados(produto1);
/**
 * Nulos e Opcionais
 */
var idade = 32;
//idade = null;
var maquinaDoTempo = function (idade) {
    if (idade) {
        return idade - 10;
    }
    else {
        return 0;
    }
};
var idade1 = maquinaDoTempo(idade);
var idade2 = maquinaDoTempo();
console.log("Nulos e opcionais: ".concat(typeof idade1, " (").concat(idade1, ")"));
console.log("Nulos e opcionais: ".concat(typeof idade2, " (").concat(idade2, ")"));
