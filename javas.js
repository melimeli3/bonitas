document.getElementById("BVer").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "block";
})

document.getElementById("BotonCerrar").addEventListener('click', function() {
    document.getElementById("resultado").css.display = "none";
    document.querySelector(".Contenedor-Binicio").css.display = "none";
    document.querySelector(".Con-2").css.display = "block";
})