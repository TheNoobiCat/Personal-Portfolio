function getPriceWindow(){
    var url = 'quote.html';
    var windowName = 'MiniWindow';
    var windowFeatures = 'width=800,height=800';

    // Open the new window
    window.open(url, windowName, windowFeatures);
}

function FillPrice(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    price = urlParams.get("price")
    document.getElementById("price").innerHTML = "£"+price
}

window.onload = function(){
    FillPrice()
}