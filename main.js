function topNavFunction(){
    let clickNav = document.getElementById('topNavClick');
    if(clickNav.topnav === 'topnav'){
        clickNav += 'responsive';
    }else{
        clickNav.topnav = 'topnav';
    }
}
