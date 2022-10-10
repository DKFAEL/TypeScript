"use strict";
class Cachorro {
    /**
     * Atributos ou propriedades
     */
    /*
   nome: string
   raça: string
   cor: string
   idade: number
   peso: number
   cumprimento: number
   morder: boolean
   pedigree: boolean  */
    /**
     * Método construtor
     *
     * Serve para aocriar um novo objeto daclasse, possamos receber valores paraq ue  aclasse utilize-os
     *
     * se o programador não criar o método construtor, a própria linguagem irá gerar um método construtor padrão
     *
     *  no JavaScript/Typescript, se pode ter apenas um único método de construtor
     */
    /*
    constructor(nome: string, raça: string, cor: string, idade:number, peso: number, cumprimento:number, morder: boolean, pedigree:boolean) {
     this.nome = nome    // o THIS  faz referencia a propria classe dentro dela mesmo
     this.raça = raça
     this.cor = cor
     this.idade = idade
     this.peso = peso
     this.cumprimento = cumprimento
     this.morder = morder
     this.pedigree =pedigree
    }
 }   */
    constructor(//PUBLIC TORNA OS PARAMETROS DE DENTRO  EM PROPRIEDADE
    nome, raça, cor, idade, peso, cumprimento, morder, pedigree) {
        this.nome = nome;
        this.raça = raça;
        this.cor = cor;
        this.idade = idade;
        this.peso = peso;
        this.cumprimento = cumprimento;
        this.morder = morder;
        this.pedigree = pedigree;
        /*
         * this.nome = nome
         */
    }
    somar(a, b) {
        return a + b;
    }
}
/*
 * Objeto é uma  instância de uma classe
 */
let c = new Cachorro('Pitbull do Funk', 'Pitbull', 'preto', 3, 40, 1, false, true);
let c2 = new Cachorro('Justin Au', 'Vira-Lata', 'branço', 2, 20, 1.2, true, false);
console.log(c.nome);
console.log(c2.nome);
