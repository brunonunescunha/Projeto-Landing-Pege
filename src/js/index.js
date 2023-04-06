const imagem = document.querySelectorAll(".imagem-painel")
const setaVoltar = document.getElementById("btn-voltar")
const setaAvancar = document.getElementById("btn-avancar")

let imagemAtual = 0 

setaAvancar.addEventListener("click", function(){
    if (imagemAtual === imagem.length  -1){
        return;
    }
    imagemAtual++;

    escondeImagemMostrada()

    imagem[imagemAtual].classList.add("mostrar")

    mostrarOuEsconderSetas()
    

})

setaVoltar.addEventListener("click", function(){
    if (imagemAtual === 0){
        return
    }
    imagemAtual--;

    escondeImagemMostrada()

    imagem[imagemAtual].classList.add("mostrar")

    mostrarOuEsconderSetas()
})



function escondeImagemMostrada() {
    const imagemMostrada = document.querySelector(".mostrar")
    imagemMostrada.classList.remove("mostrar")
}
function mostrarOuEsconderSetas() {
    const naoEhAPrimeiraImagem = imagemAtual !==0
    if(naoEhAPrimeiraImagem){
        setaVoltar.classList.remove("opacidade")
    }else{
        setaVoltar.classList.add("opacidade")
    }

    const chegouNaUtimaImagem = imagemAtual !== 0 && imagemAtual === imagem.length -1

    if(chegouNaUtimaImagem){
        setaAvancar.classList.add("opacidade")
    } else {
        setaAvancar.classList.remove("opacidade")
    }
}
// function mostrarOuEsconderSetas(){
//     const naoEhPrimeiraImagem = imagemAtual !==0
//     if(naoEhPrimeiraImagem){
//         setaVoltar.classList.remove("opacidade")
//     } else {
//         setaVoltar.classList.add("opacidade")
//     }

//     const chegouNaUtimaImagem = imagemAtual !== 0 && imagemAtual === imagem.length - 1
//     if(chegouNaUtimaImagem){
//         setaAvancar.classList.add("opaciade")
//     } else {
//         setaAvancar.classList.remove("opacidade")
//     }
// }
