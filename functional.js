function getTitle(title){
    const cardtitle = document.getElementById(title);
    const productName = cardtitle.innerText;
    return productName;
}
function getPrice(price){
    const productElement = document.getElementById(price);
    const productPrice = parseFloat(productElement.innerText);
    return productPrice;
}
let count = 0;
function card1Click(){
    const productTitle = getTitle("row1-card1");
    const productPrice = getPrice("row1-card1-price");
    const price = getPrice('total-price');
    const priceText = document.getElementById('total-price');
    const productText = document.getElementById('product-text');
    const productInnerText = document.createElement(<h3></h3>)
    const totalprice = price + productPrice;
    priceText.innerText = totalprice;


    console.log(totalprice);
}