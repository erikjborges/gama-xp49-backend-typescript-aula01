import { mensagem } from './mensagem'

function imprimeMensagem(texto: string) {
    console.log('Esta é minha mensagem: ' + texto);
    return 1;
}

imprimeMensagem(mensagem());

/**
 * Tipos básicos
 */
//string
const nome: string = 'Erik';
console.log(`Tipo basico: ${typeof nome}`);
const sobrenome = 'Borges';
console.log(`Tipo basico: ${typeof sobrenome}`);

function concatenaStr(texto1: string, texto2: string): string {
    return `${texto1} ${texto2}`;
}

const nomeCompleto = concatenaStr(nome, sobrenome);

console.log(`Tipo basico: ${typeof nomeCompleto} ${nomeCompleto}`);

//number
const n1: number = 2;
const n2 = 3.2;
console.log(`Tipo basico: ${typeof n1} (${n1})`);
console.log(`Tipo basico: ${typeof n2} (${n2})`);

const somaN = (num1: number, num2: number) => num1 + num2;
const soma: number = somaN(n1, n2);
console.log(`Tipo basico: ${typeof soma} (${soma})`);

//boolean
const b1: boolean = true;
const b2 = false;
console.log(`Tipo basico: ${typeof b1} (${b1})`);
console.log(`Tipo basico: ${typeof b2} (${b2})`);

const funcaoAnd = (bool1: boolean, bool2: boolean): boolean => {
    return bool1 && bool2;
}

const resultadoAnd = funcaoAnd(b1, b2);

console.log(`Tipo basico: ${typeof resultadoAnd} (${resultadoAnd})`);

// any e void
let value: any = 123;
console.log(`Tipo basico: ${typeof value} (${value})`);
value = 'teste';
console.log(`Tipo basico: ${typeof value} (${value})`);

function imprimeRetorna(val: any) {
    console.log(`Tipo basico: ${typeof val} (${val})`);
    return val;
}

function imprimeNaoRetorna(val: any): void {
    console.log(`Tipo basico: ${typeof val} (${val})`);
}

imprimeRetorna(value);
imprimeNaoRetorna(value);

/**
 * Tipo Array
 */
const verduras: string[] = ['couve', 'alface', 'almerao'];
const frutas = ['maca', 'laranja', 'banana', 'pitaia'];
const notas = [10, 20, 30];

console.log(`Tipo array: ${typeof verduras} (${verduras})`);
console.log(`Tipo array: ${typeof frutas} (${frutas})`);
console.log(`Tipo array: ${typeof notas} (${notas})`);

const alteraArray = (lista: string[]): string[] => {
    let novaLista: string[] = [];
    for(let valor of lista){
        novaLista.push(`${valor} verde`);
    }
    return novaLista;
}

const listaAlterada = alteraArray(verduras);
console.log(`Tipo array: ${typeof listaAlterada} (${listaAlterada})`);

/**
 * Tipo Tupla
 */
const endereco1: [string, number, string] = ['Rua do forro', 123, 'Bairro da Limoeira'];
let endereco2 = ['Rua do forro', '123', 'Bairro da Limoeira']; // Nao eh tupla

console.log(`Tipo tupla: ${typeof endereco1} (${endereco1})`);
console.log(`Tipo NAO tupla: ${typeof endereco2} (${endereco2})`);

const modificaEndereco = (endereco: [string, number, string]): [string, number, string] => {
    if(endereco[0] == 'Rua do forro')
        endereco[0] = 'Rua do pagode';
    return endereco;
}

const enderecoNovo = modificaEndereco(endereco1);
console.log(`Tipo tupla: ${typeof enderecoNovo} (${enderecoNovo})`);

/**
 * Tipo Object
 */
const cliente = {
    nome: 'Joao',
    "sobrenome": "Do pe de feijao"
};

const produto = {
    descricao: 'Camisa do Fluminense',
    preco: 100.50,
    vendido: false
};

console.log(`Tipo objeto: ${typeof cliente} (${cliente})`);
console.log(`Tipo objeto: ${typeof produto} (${produto})`);

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

function verificaNumero(numero: number): boolean {
    if(typeof numero === 'number'){
        return true;
    } else {
        return numero;
    }
}

const verNumero = verificaNumero(10);
console.log(`Tipo never: ${typeof verNumero} (${verNumero})`);

/**
 * Union types
 */
const id: number | string = 1000;

const imprimeId = (codigo: number | string): number | string => {
    console.log(`Union types: ${typeof codigo} (${codigo})`);
    return codigo;
}

imprimeId(id);

// narrowing
const imprimeCodigo = (codigo: number | string) => {
    if(typeof codigo === 'string')
        console.log(`Union types: ${typeof codigo} (${codigo.toUpperCase()})`);
    else 
        console.log(`Union types: ${typeof codigo} (${codigo})`);
}

imprimeCodigo(1000);
imprimeCodigo('teste');

/**
 * Tipo enum
 */

enum Status {
    Pendente = 'A',
    Processando = 'B',
    Processado = 'C'
};

const situacao1: Status = Status.Processando;
const situacao2 = Status.Processando;

console.log(`Tipo Enum: ${typeof situacao1} (${situacao1})`);
console.log(`Tipo Enum: ${typeof situacao2} (${situacao2})`);

const mudaStatus = (preStatus: Status): Status => {
    let posStatus: Status;
    switch(preStatus) {
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
}

const novoStatus = mudaStatus(situacao1);
console.log(`Tipo Enum: ${typeof novoStatus} (${novoStatus})`);

/**
 * Type Alias
 */

type Cliente = {
    nome: string,
    sobrenome: string
};

type Produto = {
    descricao: string,
    preco: number,
    vendido: boolean
};

const cliente1: Cliente = {
    nome: "Joao",
    sobrenome: "Do pe de feijao"
};

const produto1: Produto = {
    descricao: 'Camisa do Fluminense',
    preco: 100.50,
    vendido: false
};

console.log(`Type ALias: ${typeof cliente1} (${cliente1})`);
console.log(`Type ALias: ${typeof produto1} (${produto1})`);

// const imprimeRetornaDadosCliente = (objeto: Cliente): Cliente => {
//     console.log(objeto);
//     return objeto;
// }

const imprimeRetornaDados = (objeto: Produto | Cliente): Produto | Cliente => {
    console.log(objeto);
    return objeto;
}

imprimeRetornaDados(cliente1);
imprimeRetornaDados(produto1);

/**
 * Nulos e Opcionais
 */
let idade: number | null = 32;
//idade = null;

const maquinaDoTempo = (idade?: number | null): number | null => {
    if(idade){
        return idade - 10;
    } else {
        return 0;
    }
    return null;
}

const idade1 = maquinaDoTempo(idade);
const idade2 = maquinaDoTempo();

console.log(`Nulos e opcionais: ${typeof idade1} (${idade1})`);
console.log(`Nulos e opcionais: ${typeof idade2} (${idade2})`);