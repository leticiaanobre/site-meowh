function sim(){
    alert('Obrigado por ter aceitado amorzinho! <3 (você não teve opção)')
}

function meowh(){
    alert('Como eu já sabia que você ia aceitar, fiz mais uma surpresinha.')
}

function mudarPos(min, max){ // vai gerar número aletório para mudar a posição do botão
    return (Math.random() * (max-min) + min) + '%'
}

function desvia(){
    var nao = document.getElementById('opnao')
    nao.style.position = 'absolute'
    nao.style.bottom = mudarPos(5, 95)
    nao.style.right = mudarPos(5, 95)
}