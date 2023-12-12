function removervidap1(){
    var life = parseInt(document.getElementById("life1").innerHTML)
    document.getElementById("life1").innerText = life - 1
}

function minusmostrarvidap1(){
    var vidareal = parseFloat(document.getElementById("life1").innerHTML)
    var calculo = parseFloat((vidareal * 100) / 20) - 100 
    document.getElementById("perce1").innerText = calculo
    console.log(document.getElementById("life1"))
}

function minusplayer1(){
    removervidap1()
    minusmostrarvidap1()
}

function addvidap1(){
    var life = parseInt(document.getElementById("life1").innerHTML)
    document.getElementById("life1").innerText = life + 1
}

function addmostrarvidap1(){
    var vidareal = parseFloat(document.getElementById("life1").innerHTML)
    var calculo = parseFloat((vidareal * 100) / 20) - 100   
    document.getElementById("perce1").innerText = calculo
    console.log(document.getElementById("life1"))
}

function addplayer1(){
    addvidap1()
    addmostrarvidap1()
}

function removervidap2(){
    var life = parseInt(document.getElementById("life2").innerHTML)
    document.getElementById("life2").innerText = life - 1
}

function minusmostrarvidap2(){
    var vidareal = parseFloat(document.getElementById("life2").innerHTML)
    var calculo = parseFloat((vidareal * 100) / 20) - 100 
    document.getElementById("perce2").innerText = calculo
    console.log(document.getElementById("life2"))
}

function minusplayer2(){
    removervidap2()
    minusmostrarvidap2()
}

function addvidap2(){
    var life = parseInt(document.getElementById("life2").innerHTML)
    document.getElementById("life2").innerText = life + 1
}

function addmostrarvidap2(){
    var vidareal = parseFloat(document.getElementById("life2").innerHTML)
    var calculo = parseFloat((vidareal * 100) / 20) - 100   
    document.getElementById("perce2").innerText = calculo
    console.log(document.getElementById("life2"))
}

function addplayer2(){
    addvidap2()
    addmostrarvidap2()
}
