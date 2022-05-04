function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')

if (fano.value == 0 || fano.value > ano){
    window.alert('Erro')
} else{
   var fsex = document.getElementsByName('radsex')
   var idade = ano - fano.value
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked){
        gênero = 'Homem'
        if (idade > 0 && idade <10 ){
            //criança
            img.setAttribute('src','criança-menino.png')
        } 
            else if (idade < 22){
            //jovem
            img.setAttribute('src','jovem-homem.jpg')

        }
            else if (idade < 59){
            //adulto
            img.setAttribute('src','adulto-homem.jpg')

        }
        else {
            //idoso
            img.setAttribute('src','idoso-homem.jpg')

        }
    } else if (fsex[1].checked){
        gênero = 'Mulher'
        if (idade > 0 && idade <10 ){
            //criança
            img.setAttribute('src', 'criança-menina.png')
        } 
            else if (idade < 22){
            //jovem
            img.setAttribute('src', 'jovem-mulher.jpg')

        }
            else if (idade < 59){
            //adulto
            img.setAttribute('src', 'adulto-mulher.jpg')

        }
        else {
            //idoso
            img.setAttribute('src', 'idoso-mulher.jpg')

        }
    }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}

