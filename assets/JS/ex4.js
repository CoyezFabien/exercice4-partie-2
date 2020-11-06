// var block = document.getElementById('blocLine');
window.addEventListener('load',hide);
/*windows c'est la target le addEventListener c'est une methode ('') c'est levenement que l'on va "ecouter"*/
function hide()
{
document.getElementById('block1').style.visibility = 'hidden';
document.getElementById('block2').style.visibility = 'hidden';
document.getElementById('block3').style.visibility = 'hidden';
}


window.addEventListener('scroll',visible);
function visible()
{
    var size = window.scrollY;
    if(size >= 400)

    {document.getElementById('block1').style.visibility = 'visible';
    document.getElementById('block2').style.visibility = 'visible';
    document.getElementById('block3').style.visibility = 'visible';}

}