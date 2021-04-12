
 var BW = document.getElementById("BlackWhite");

 BW.onclick = function(){

    document.querySelector("html").classList.toggle("dark")
    BW.classList.toggle("ativo")

 } 


//Ocultar Senha
var SenhaVisivel = document.getElementById("MostrarSenha");
flagMostrar = false;

SenhaVisivel.onclick = function(){

    if(flagMostrar == false){
        iSenha.type = "text";
        flagMostrar = true;
    }else{
        iSenha.type = "password";
        flagMostrar = false;
    }

}
(function(){
var $target = $(`.anime`),
    animationclass = `anime-start`;
    offset = $(window).height() * 3/4;
    function animescroll(){
    var documentTop = $(document).scrollTop();
    //console.log(documentTop);
    $target.each(function(){
        var itemtop = $(this).offset().top;
        if(documentTop > itemtop - offset){
            $(this).addClass(animationclass);
        }else{
            $(this).removeClass(animationclass)
        }
    })     
    }

    animescroll();

    $(document).scroll(debouce(function(){
        animescroll();
        console.log(`teste`);
    }, 200));
}());