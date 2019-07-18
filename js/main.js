var loading = {
    show:function(){
        document.getElementById('loading').style.setProperty('opacity','1');
        document.getElementById('loading').style.setProperty('visibility','visible');
    },
    hide:function(){
        document.getElementById('loading').style.setProperty('opacity','0');
        document.getElementById('loading').style.setProperty('visibility','hidden');
    }
}
function setColor(){
    const color = localStorage.backgroundColor || '#394a71';
    const body = document.getElementsByTagName('body');
    body[0].style.background=color;
    document.getElementById('color_input').value=color;
}
setColor();

function colorChange(){
    const color = document.getElementById('color_input').value;
    const body = document.getElementsByTagName('body');
    // const body = document.getElementById('form');
    body[0].style.background=color;
    localStorage.setItem("backgroundColor",color)
}
function setDefaultColor(){
    const default_color = '#394a71';
    document.getElementById('color_input').value = default_color;
    const body = document.getElementsByTagName('body');
    // const body = document.getElementById('form');
    body[0].style.background=default_color;
    localStorage.setItem("backgroundColor",default_color)
}
