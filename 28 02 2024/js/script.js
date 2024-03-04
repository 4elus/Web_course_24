

function add_item(name_product, price, picture) {
    var div = document.getElementById("list-cart");
    var item = document.createElement("div");
    item.innerHTML = "<div class='item'><img src='img/kart/"+picture+"' width='64px'>" + name_product + " " + price + " в тг.</div>";
    //"<div class='item'><img src='img/kart/air-jordan-1-elevate-high-shoes-zz97lV.jpeg' width='64px'>Название товара цена в тг.</div>"
    //li.appendChild(document.createTextNode(name_product + " " + price + "тг."));
    div.appendChild(item);
    alert(name_product);
}