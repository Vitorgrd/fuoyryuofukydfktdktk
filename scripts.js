const button = document.querySelector('.button-tarefa') // html
const input = document.querySelector('.input-tarefa')
const listaCompleta = document.querySelector('.list-tarefa')


let lista = []


function addTarefa(){
    lista.push(input.value)

    input.value = ''

mostrarTarefas()  

}

function mostrarTarefas(){

    let novaLi = ''   

    lista.forEach( (tarefa, index) => {

        novaLi = novaLi + `

                <li class="tarefa">
             <img src="./img/cHECK.png" alt="Realizou tarefa">
                <p>${tarefa}</p>
                <img src="./img/lixo.png" alt="Tarefa lixeira" onclick="deletarItem(${index})">
             </li>




        `



    })

    listaCompleta.innerHTML = novaLi



}

function deletarItem(index){
    lista.splice(index, 1)


    mostrarTarefas()
}


button.addEventListener('click',addTarefa)