 /*let pessoa = {
    nome: 'Pietro',
    idade: '22',
    altura: 1.8,
    cpf: '111.111.111-01',
    solteiro: false,
    habilidades: ['Java', 'Angular', 'TypeScript',' JavScript', 'Node.JS', 'Spring Boot'],
    endereço: {
        rua: 'Brasil Gás',
        numero: 567,
        estado: 'BA',
        complemento: 'Casa',
        cep: '123000-000'
    }
}



let pessoa2 = {
    nome: 'Pietro',
    idade: '22',
    altura: 1.8,
    cpf: '111.111.111-01',
    solteiro: false,
    habilidades: ['Java', 'Angular', 'TypeScript',' JavScript', 'Node.JS', 'Spring Boot'],
    endereço: {
        rua: 'Brasil Gás',
        numero: 567,
        estado: 'BA',
        complemento: 'Casa',
        cep: '123000-000'
    },
    rg: '098793938833'
}   */

interface Endereço {
    rua: string
    numero: number
    estado: string
    complemento: string
    cep: string
}


interface Pessoa {
    nome: string
    idade: number
    altura: number
    cpf: string
    solteiro: boolean
    habilidades: string []
    endereco: Endereço
    // OU
    /* endereco { rua: string
        numero: number
        estado: string
        complemento: string
        cep: string }      */ 
        rg: string
        cumprimentar (): void
    }
    
    const p: Pessoa ={
        altura: 1.9,
        nome: 'Faustão',
        idade: 12,
        cpf: '222.222.222-09',
        solteiro: true,
        habilidades: ['JS', 'HTML', 'CSS', 'TS'],
        endereco: {
            rua: 'Base Naval',
            cep: '122772727',
            complemento: 'casa',
            estado: 'PE',
            numero: 789
        },
        rg: '098758997655',
        cumprimentar() {
            console.log ('Saudações, meu nome é ' + this.nome)
        }
    }

    const p2: Pessoa = {
        nome: 'paula',
        altura: 1.7,
        idade: 23,
        solteiro: false,
        cpf: '07987939339',
        habilidades: [' HTML', 'CSS'],
        endereco: {
            rua: 'Rua 2',
            cep:'1282828-00',
            complemento: 'casa',
            estado: 'BA',
            numero: 789
        },
        rg: '323222',
        cumprimentar() {
            console.log ('Saudações, meu nome é ')
        }
    
    }
    
