// tipagem no TypeScript

// tipagem implícita
let username = 'rafael_dk'
username =  'isadora_pinto'

// tipagem explicita 

//  : USADA APENAS EM TIPAGEM EXPLICITA
let pi: number = 3.1415
let logado: boolean = true

// union types
let rg: number | string = 09878909987
rg = '09878909987'

// DA PRA USAR TODOS OS TIPOS EM   ANY 

let generico: any =[]
generico= {
    a: '',
    b: 8,
    c: true
}
 generico = 'eu sou genérico'
 generico = 6.89


 // GUARDANDO UMA LISTA DE STRINGS

 const listaDeNomes:  string[] = ['João Pedro', 'César', 'Vitor', 'Claudia', 'Rafael','Lucas']

// GUARDA UMA LISTA DE NUMBER
 const notas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
 //notas.push('iajoil')


 // <>  GENERICO

 const valores: Array<string | number> = [ 'rafael', 883, 'ola', 909, 'nunes', ]
 const array: Array<boolean> =  [true, false, false, true, true, true , true , false] 
 const list: Array<any> = [ true, 'd', '1' , 332, [], {}, 988]

