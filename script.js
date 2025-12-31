var btc= document.getElementById("bitcoin");
var eth= document.getElementById("ethereum");
var doge= document.getElementById("dogecoin");
var tether= document.getElementById("tether");

var settings ={
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response) {
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    tether.innerHTML = response.tether.usd;
    
});