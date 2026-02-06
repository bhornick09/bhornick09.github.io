var theme = 0;
var themeColor = "gold"


function changeTheme(){
    switch(theme){
        case 0:
            themeColor = "gold"
            theme++;
            break;
        case 1:
            themeColor = "greenyellow"
            theme++;
            break;
        case 2:
            themeColor = "red"
            theme++;
            break;
        case 3:
            themeColor = "orange"
            theme++;
            break;
        case 4:
            themeColor = "aqua"
            theme = 0;
            break;
    }
    document.documentElement.style.setProperty('--main-color', themeColor);
}

