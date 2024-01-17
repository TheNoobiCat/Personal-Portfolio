function getPriceWindow(){
    //calc price based on choices
    pagecount = parseInt( document.getElementById("pages").value)
    sitetype = parseFloat(document.getElementById("sitetype").value)
    console.log(pagecount)
    console.log(sitetype)
    price=((pagecount*sitetype*3.99)*1.4).toFixed(2)
    deposit=(price*0.1).toFixed(2)


    var url = 'quote.html?price='+price+"&deposit="+deposit;
    var windowName = 'MiniWindow';
    var windowFeatures = 'width=800,height=800';

    // Open the new window
    window.open(url, windowName, windowFeatures);
}

function FillPrice(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    price = urlParams.get("price")
    deposit = urlParams.get("deposit")
    document.getElementById("price").innerHTML = "£"+price
    document.getElementById("depositamt").innerHTML="I may ask for a deposit of £"+deposit+" on this order. The deposit amount is included in the total above."
}

window.onload = function(){
    FillPrice()
}