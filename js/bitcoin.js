var btn = document.querySelector("button");
var priceDisplay = document.querySelector("#price");
var USD = document.querySelector("#USD");
var GBP = document.querySelector("#GBP");
var EUR = document.querySelector("#EUR");
var currency = "";

btn.addEventListener("click", function(){
  if (USD.checked) currency = "USD";
  if (GBP.checked) currency = "GBP";
  if (EUR.checked) currency = "EUR";

  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var data = JSON.parse(XHR.responseText);
      var price = data.bpi[currency].rate;
      priceDisplay.innerText = price + " " + currency;
    }
  };

  var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  XHR.open("GET", url);
  XHR.send();
});
