function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var frase = document.getElementById('frase')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var body = document.getElementById('color')
    msg.innerHTML = `São ${hora} Horas e ${minuto} minutos.`
    

    if(hora <= 12 && hora >= 0) {

        frase.innerHTML = "Bom Dia!"
        document.body.style.background = '#e2cd9f'
        foto.src = 'soldia.png'

    } else if(hora > 12 && hora < 19){
        
        frase.innerHTML = "Boa Tarde!"
        document.body.style.background = 'orange'
        foto.src = 'soltarde.png'
        

    } else if(hora >= 19 && hora <= 23){

        frase.innerHTML = "Boa Noite!"
        document.body.style.background = 'grey'
        foto.src = 'https://dbdzm869oupei.cloudfront.net/img/vinylrugs/preview/50252.png'

    }

}
