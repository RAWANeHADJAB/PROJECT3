let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat6');
let ravana = document.querySelector('.ravana');
Window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value +'px';
    moon.style.top = value *4 + 'PX';
    moon.style.top = value *3 + 'px';
    mountains3.style.top = value*1.5 +'px';
    mountains4.style.top = value*1.5 +'px';
    river.style.top = value +'px';
    boat.style.top = value +'px';
    boat.style.left = value *3 +'px';
    ravana.style.fontsize = value +'px';
    
    if( scrollY >=67){
        ravana.style.fontsize = 67 + 'px';
        ravana.style.position = 'flixd';
        if (scrollY >=478) {
            ravana.style.display = 'none';
        }else{
            ravana.style.display = 'block';
        }
        if (scrollY>=127) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001F)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#000,#332244)';
        }

}
    
    }


