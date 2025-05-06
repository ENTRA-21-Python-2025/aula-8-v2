var tarefas = [];

// tarefas.push("test")

// console.log(tarefas)

var pessoa = {
    nome: "Aurora",
    idade: 7,
    // "data-de-cadastro": "12/06/2018"
};

// console.log("TODA MINHA LISTA:", tarefas)
// console.log(tarefas)
// console.log(tarefas[0])
// function minhaPrimeiraFuncao(value, index) {
//  /// .....
// }

// minhaPrimeiraFuncao()
// tarefas.

// console.log(pessoa["nome"])
// console.log(pessoa.idade)
// console.log(pessoa["data-de-cadastro"])
// tarefas.forEach(function(tarefa, indice) {
//     console.log(indice, tarefa)
// })
// const test = [1,2,3] 

// var novoArray = test.map(function(tarefa) {
//     console.log("MAP", tarefa)
//     return tarefa * 2
// })

// console.log(novoArray)

/** 
 * DOM - ARVORE DE ELEMTNSO
 */

// var containerElemento = document.getElementById("container")
// var itemsElementos = document.getElementsByClassName("list-group-item")
// var containerElemento = document.querySelector(".container")

// var itemsElementos = document.getElementsByClassName("list-group-item")

// var formElemento = document.querySelector(".container form")
// var formAll = document.querySelectorAll("form")

// console.log(formAll)



// alterando atributos
// const boxElement = document.querySelector(".box")
// const linkElement = document.querySelector('a')

// boxElement.style.background = 'red'
// boxElement.style.color = 'white'

const inputElement = document.querySelector(".form-control")
// console.log(inputElement.value)
// inputElement.classList.add("is-invalid")
const listElement = document.querySelector(".list-group")
const buttonElement = document.querySelector("button")
const formElement = document.querySelector('form')


var tarefasString = localStorage.getItem('tarefas')
tarefas = JSON.parse(tarefasString)

tarefas.forEach(function(tarefa) {
    const itemElemento = document.createElement('li')
    itemElemento.innerText = tarefa
    itemElemento.classList.add('list-group-item')
    listElement.appendChild(itemElemento)
});

formElement.addEventListener('submit', function(evento) {
    evento.preventDefault()

    let valorDoInput = inputElement.value;

    if(valorDoInput) {
        tarefas.push(valorDoInput)
        // listElement.innerHTML = '<li class="list-group-item">' + valorDoInput + '</li>'
        const itemElemento = document.createElement('li')
        itemElemento.innerText = valorDoInput
        itemElemento.classList.add('list-group-item')
        listElement.appendChild(itemElemento)
        
        localStorage.setItem('tarefas', JSON.stringify(tarefas))

        inputElement.value = ''
        inputElement.classList.remove('is-invalid')
    } else {
        inputElement.classList.add('is-invalid')
    }

    
    console.log("NOVO ESTADO DO ARRAY", tarefas)
    console.log("QUANTIDADE DO ARRAY", tarefas.length)
})

// const frutas = ["maça", "laranja", "pera"]
// ["maça","laranja","pera"]
// localStorage.setItem('lista-frutas', JSON.stringify(frutas))

// const frutas = localStorage.getItem('lista-frutas')

// console.log(JSON.parse(frutas))
// localStorage.setItem('aluno', 'Nicholas')
// var aluno = localStorage.getItem('aluno')

// console.log(aluno)

// localStorage.removeItem('aluno')
// localStorage.clear()