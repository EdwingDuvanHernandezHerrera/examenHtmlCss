const boton = document.querySelectorAll(".botonLink");
boton.forEach(function(btn){
    btn.addEventListener("click", function(){
        btn.classList.toggle("active")
    })
}) 
