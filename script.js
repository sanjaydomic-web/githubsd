function fun(img, name, storage, charger, price){
    localStorage.setItem("productImg",img);
    localStorage.setItem("productName", name);
    localStorage.setItem("productStorage", storage);
    localStorage.setItem("productCharger", charger);
    localStorage.setItem("productPrice", price);
    
    window.location.href="payment.html";
}

function closePage(){
    window.location.href="front.html";
    document.getElementById("mobile").innerHTML= "mobile";
}


function homePage(){
    window.location.href="front.html";
}