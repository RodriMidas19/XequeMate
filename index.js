const audio = new Audio();
audio.src = "./mp3/musica.mp3";

function hideButton(x){
    x.style.display = "none";
}
function down(){
    document.getElementById('msg').scrollIntoView();
}