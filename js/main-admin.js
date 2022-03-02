function topNavFunction(){
    let clickNav = document.getElementById('topNavClick');
    if(clickNav.className === 'topnav'){
        clickNav += 'responsive';
    }else{
        clickNav.className = 'topnav';
    }
}
