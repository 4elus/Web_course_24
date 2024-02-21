var cart_button = document.getElementById("cart_btn");
var list_a = document.getElementsByClassName("link");
cart_button.addEventListener("click", function(){

    alert("Корзина!");
});
var main = document.getElementsByClassName("main");
var header = document.getElementsByClassName("header");
var switch_theme_button = document.getElementById("switch_theme");
switch_theme_button.addEventListener("click", function(){
   header[0].style.backgroundColor  = "white";
   main[0].style.backgroundColor  = "white";
});










list_a[0].addEventListener("click", function(){
    alert("Главная");
})

list_a[1].addEventListener("click", function(){
    alert("Католог");
})

list_a[2].addEventListener("click", function(){
    alert("Контакты");
})



















// for(var c = 0; c < 3; c+=1){
//     list_a[c].addEventListener("click", function(){
//         if (c == 0){
//             alert("Главная");
//         }else if (c == 1){
//             alert("Католог");
//         }else if (c == 2){
//             alert("Контакты");
//         }
//     })
// }

