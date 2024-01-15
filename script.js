//Função callback
const marca = (callback) => console.log(`Seu modelo de carro favorito é ${callback}`);

const carro = (modelo) => {
    const input = prompt('Qual o modelo do seu carro favorito?');
    marca(input);
}
carro(marca);



//callback com conta
const conta = (a, b) => a * b;

const mult = (a, b, multp) => multp(a, b);

const result = conta(50, 250);

console.log(result);



//Trabalhando com herança
class Carros {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    automovel() {
        console.log(`${this.marca} ${this.modelo} ano ${this.ano}`);
    }
}

const mercedes = new Carros('Mercedes', 'SL', '2023');
mercedes.automovel();



//Aplicando a herança
class Carros2 extends Carros {
    constructor(marca, modelo, ano) {
        super();
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const porsche = new Carros2('Porsche', '911', '2023');

porsche.automovel();



//Usando o super em herança
class Carros3 extends Carros2 {
    constructor(marca, modelo, ano, price) {
        super(marca, modelo, ano);
        this.price = price;
    }

    automovel2() {
        console.log(`${this.marca} ${this.modelo} ano ${this.ano} valor R$${this.price}.000,000 mil reais`);
    }
}

const chevrolet = new Carros3('Chevrolet', 'Cruze', '2023', '130');
chevrolet.automovel2();



//Usando template string
const names = 'Thiago';
const lastName = 'Santos';

console.log(`Name: ${names}
LastName: ${lastName}`);



//Trabalhando com setPrototypeOf
const carros =  {
    marca: 'Porsche',
    modelo: '911',
    motor: 'V6 Turbo',
    fullCar: function() {
        console.log(this.marca, this.modelo, this.motor);
    }
}
carros.fullCar();

//Aplicando o object.prototypeOf
const Porsche = {
    marca: 'Porsche',
    modelo: 'Panamera',
//Deixando todo o console.log em maisculo
    fullCarMaiusculo: function() {
        console.log(this.marca.toUpperCase(), this.modelo.toUpperCase(), this.motor.toUpperCase());
    }
}
Object.setPrototypeOf(Porsche, carros);
Porsche.fullCar();
Porsche.fullCarMaiusculo();

//Trabalhando com promisse
const operacao = new Promise((resolve, reject) => {
    const input1 = prompt('Digite um número:');
    const input2 = prompt('Digite outro número:');
    const mult = input1 * input2;

    if (mult >= 100) {
        resolve(mult);
    }else {
        reject(mult);
    }
});

//Tratando o resultado da promisse
operacao.then((mult) => {
    console.log(`O valor de then é ${mult}`)
}).catch((error) => {
    console.error(`O valor de catch é ${error}`);
}).finally(() => {
    alert('Digite outra operação!');
});



//Usando promise.all e promise.race
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise1');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise2');
    }, 1100);
});

Promise.all([promise1, promise2]).then((promises) => {
    console.log(promises);
});

Promise.race([promise1, promise2]).then((promise) => {
    console.log(promise);
});

//Trabalhando com async await
const resultadoPromises = async() => {
    const resultado1 = await promise1;
    console.log('Resultado1 = Promise1');

    const resultado2 = await promise1;
    console.log('Resultado2 = Promise2');
}
resultadoPromises();



//Usando o then e catch na estrutura async await
const resultadoPromises2 = async() => {
    const resultado1 = await promise1.then((resolve) => {
        console.log(resolve);
    }).catch((reject) => {
        console.log(reject);
    });

    const resultado2 = await promise2.then((resolve) => {
        console.log(resolve);
    }).catch((reject) => {
        console.log(reject);
    });
}
resultadoPromises2();



//Trabalhando com switch case dentro de promise
const statusHumor = 'feliz';

const isStatusHumor = new Promise((resolve, reject) => {
    switch (statusHumor) {
        case 'feliz':
            resolve({status: 'Feliz'});
            break;
        case 'triste':
            reject({status: 'Triste'});
            break;
        case 'bravo':
            reject({status: 'Bravo'});
            break;
        default:
            reject({status: 'Normal'});
            break;
    };
});

//Validando com then e catch
isStatusHumor.then((resposta) => {
    console.log(`Estou muito ${resposta.status}`);
}).catch((reject) => {
    console.log(`Estou muito ${reject.status}`);
});



//Trabalhando com try e catch
const genero = 'masculino';

const thisGenero = () => {
    try {
        if (genero === 'masculino' || genero === 'feminino') {
            console.log(`Seu genero é ${genero}`);
        };
    } catch (error) {
        console.log(`Algo deu errado e o error é ${error}`);
    };
};

thisGenero();



//Outros níveis do try e catch com throw
const generoError = () => {
    console.log('Genero2');
    codigo;
    throw codigo;
}

const genero3 = () => {
    try {
        thisGenero();
        generoError();
    } catch (error) {
        console.log(error);
    };
};

genero3();



//Trabalhando com arguments
function somaInfinit () {
    const args = Array.from(arguments);
    return args.reduce((accumulador, valorAtual) => accumulador += valorAtual);
};
console.log(somaInfinit(1000, 511, 800));



//Trabalhando com Rest Parameters
const multiplicadorInfinit = (mult, ...args) => {
    return args.map((num) => mult * num);
};
console.log(multiplicadorInfinit(5, 25, 50, 100));



//Trabalhando com spread operator
//Concatenando Array
const arrayName1 = ['Thiago', 'Ana', 'Andrea'];
const arrayName2 = ['Danielly', 'Danielly'];

const arrayConcat = [...arrayName1, ...arrayName2];

console.log(arrayConcat);

//Soma
const arrayNumber = [5, 25, 75];

const arrayConta = (num1, num2, num3) => {
    return num1 * num2 * num3;
};

console.log(arrayConta(...arrayNumber));

//Trabalhando com destructuring
const fullStack = {
    linguagemFront: 'Javascript',
    linguagemBack: 'PHP',
    framework: 'React'
};

const {linguagemFront, linguagemBack, framework} = fullStack;

console.log(linguagemFront + ', ' + linguagemBack + ', ' + framework);



//Trabalhando com parametros com valores predefinidos
function parametro(a = 10, b = 50) {
    return a * b;
};

console.log(parametro());



//Trabalhando com soma recursiva 01
function somaRecursiva(n) {
    if(n === 1) {
        return 1;
    };

    return n + somaRecursiva(n - 1);
};

console.log(somaRecursiva(50));



//Trabalhando com soma recursiva 02 com contagem Regressiva
function timeout(numero) {
    return new Promise(resolve => setTimeout(() => resolve(numero), 1000));
}

async function contagemRegressiva(numero) {
    if(numero <= 0) {
        return console.log('Feliz Natal!');
    };

    console.log(await timeout (numero));

    return contagemRegressiva(numero - 1);
};

console.log(contagemRegressiva(10));



//Trabalhando com closures
function closure() {
    const name = 'Thiago Santos';
    function youName() {
        console.log(name);
    };

    return youName();
};
const getClosure = closure();
getClosure;



//trabalhando com currying
let resultado;

function curryingKing(a) {
    let comparacao = false;
    return function curryingKing2(b) {
        if(!b) {
            return comparacao;
        };

        comparacao = a > b;
        a = b;

        return curryingKing2;
    };
};

resultado = curryingKing(11)(10)();
console.log(resultado);



//Objetos imutáveis

//Criar um objeto padrão para a verificação isExtensible
const obj01 = {d: '13 14 15 16'};

//preventextensions previne que um objeto crie outros objetos dentro dele mesmo
const obj1 = {a: '1 2 3 4'};
Object.preventExtensions(obj1);
obj1.b = '5 6 7 8';
console.log(obj1);

//freeze congela um objeto
const obj2 = {b: '5 6 7 8'};
Object.freeze(obj2);
delete obj2.b;
console.log(obj2);

//seal permite apenas reatribuição
const obj3 = {c: '9 10 11 12'};
Object.seal(obj3);
obj3.d = '13 14 15 16';
console.log(obj3);



//Verificando um objeto imutável
//isExtensible
console.log(Object.isExtensible(obj01));

//isFrozen
console.log(Object.isFrozen(obj2));

//isSealed
console.log(Object.isSealed(obj3));



//Trabalhando com getters e setters
const obj = {
    listHobby: ['Assistir', 'Estudar', 'Ler'],

    get primeiroHobby() {
        return this.primeiroHobby.length ? this.listHobby[0] : null;
    },

    set primeiroHobby(item) {
        this.listHobby.unshift(item);
    }
}

obj.listHobby = 'Programar';
console.log(obj.listHobby);



///Trabalhando com memoization
const memory = {};
const fibo = (n, memory) => {
    if(memory[n]) {
        return memory[n];
    }
    if(n <= 1) {
        return 1;
    }

    return memory[n] = fibo(n - 1, memory) + fibo(n - 2, memory);
};

console.log(`Fibonacci: ${fibo(50, memory)}`);