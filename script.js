function openBox(){
    document.getElementById('view').style.scale = '1';
    document.getElementById('img-box').style.backgroundImage = `url(${event.target.src})`;
}
function closeBox(){
    document.getElementById('view').style.scale = '0';
}