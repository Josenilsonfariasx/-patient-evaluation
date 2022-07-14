//recebendo os valores

var nome = document.getElementById('name')
var buton = document.getElementById('enviar')
var input = document.getElementsByName('input')
var dat = document.getElementById('date')

//eventos
buton.addEventListener('click', enviar)


function enviar(){  /* Mostra o resultado da avaliação na tela */

    var texto = nome.value
    var date = dat.value

    for(i=0; i < input.length; i++)

    if(input[i].checked){

        var inp = input[i].value 
    }


    alert(`O paciente ${texto} esta ${inp}, data da sua avaliação ${date}`)
    console.log(`${inp}` + date)

}


