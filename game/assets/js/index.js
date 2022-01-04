
// var img.src = "assets/images/pirulito.png";

console.log("teste") // conferir se o arquivo está importado

var buttons = document.querySelectorAll(".game-cardsinfo")
Array.from(buttons).forEach(function(button){
    console.log("testeeee", button)
    
    button.addEventListener("click",function(){       //ouvir click
        console.log("teste clique") 
    
        var img=button.querySelector("#imagem")

        console.log(img.src)
    
        if (img.src.includes("interrogacao")){
            img.src = "assets/images/pirulito.png";
        } else {
            img.src= "assets/images/interrogacao.png"
        }
        
    })
})





















// var imagens = document.createElement("img");
// var img.src = "assets/images/pirulito.png";




