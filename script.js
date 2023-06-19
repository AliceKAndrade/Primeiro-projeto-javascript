function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    //var horas = data.getHours();
    //var minutos = data.getMinutes()
    var horas = 20
    var minutos = 30
    msg.innerHTML = `Agora são ${horas}:${minutos}.`;
    if (horas >= 0 && horas < 12) {
        //bom dia
        img.src = 'manha.png.png';
        document.body.style.background = '#85C8F2'
    } else if (horas >= 12 && horas < 18) {
        //boa tarde
        img.src = 'tarde.png.png';
        document.body.style.background ='#F2884B'
    } else {
        //boa noite
        img.src = 'noite.png.png';
        document.body.style.background = '#877B8C'
    }
}