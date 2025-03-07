document.addEventListener('DOMContentLoaded', function (){
//referenciar elemento
    const btnReflections = document.getElementById('btnReflections');
//listener
    btnReflections.addEventListener('click', mudarPagina);
//função
    function mudarPagina (){
        window.location.href = 'albuns.html';
    }
});