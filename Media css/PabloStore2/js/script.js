var hamburger = document.getElementById("hamburger");
var nav_mobile = document.getElementById("nav-mobile");
var key = true;

hamburger.addEventListener("click", function(){
   

     // true меню есть; false меню нет.
    if (key == true){
        nav_mobile.style.display = "none";
        key = false;
    }
    else{
        nav_mobile.style.display = "flex";
        key = true;
    }
});


