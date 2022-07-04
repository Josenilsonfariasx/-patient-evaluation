var nome = document.getElementById('name')
var buton = document.getElementById('enviar')
var input = document.getElementsByName('input')





buton.addEventListener('click', enviar)
       

function enviar(){
    
    var texto = nome.value
    /* Tentando receber o valor do input e jogar em um alert 
    document.write(`Passiente ${texto} esta ${recebe}`)*/

    for(i=0; i < input.length; i++)

    if(input[i].checked){

        var inp = input[i].value 
    }


    alert(`O paciente ${texto} esta ${inp}`)
    console.log(`${inp}`)

}


