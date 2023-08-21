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
// row 1 card 1 
function row1Card1(a, b){
    // get card inner text and price
    const productTitle = getTitle(a);
    const productPrice = getPrice(b);
    const price = getPrice('total-price');
    const discount = getPrice('discount');
    const priceText = document.getElementById('total-price');
    const productText = document.getElementById('product-text');
    const purchaseButton = document.getElementById("make-Purchase");
    const applyButton = document.getElementById("apply-button");
    const totaledprice = document.getElementById('total');
    const discountPrice = document.getElementById('discount');
    // create element for list
    const updateProductText = document.createElement('li');
    updateProductText.innerText = `${count += 1}. ${productTitle}`;
    productText.appendChild(updateProductText);
    // calculate total price
    const totalprice = price + productPrice;
    priceText.innerText = totalprice;

    if(discount > 0){
        const discountedPrice = totalprice * 0.2;
        discountPrice.innerText = discountedPrice.toFixed(2);
        const priceUpdate = getPrice('total-price');
        const roundPrice = priceUpdate - discountedPrice;
        totaledprice.innerText = roundPrice;
    }
    if(totalprice > 1){
        purchaseButton.removeAttribute("disabled")
    }
    if(totalprice >= 200){
        applyButton.removeAttribute('disabled');
    }
}

function coupon() {
    const inputElement = document.getElementById('coupon');
    const inputValue = inputElement.value;
    inputElement.value = "";
    if(inputValue === "SELL200"){
        const price = getPrice('total-price');
        const discountPrice = document.getElementById('discount');
        const totalprice = document.getElementById('total');

        const discountedPrice = price * 0.2;
        discountPrice.innerText = discountedPrice.toFixed(2);
        const discount = getPrice('discount');

        const roundPrice = price - discount;
        totalprice.innerText = roundPrice;
    }


}

function pageRelode(){
    const list = document.getElementById('product-text');
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    count = 0;
    // collect elements
    const priceText = document.getElementById('total-price');
    const discountPrice = document.getElementById('discount');
    const totalprice = document.getElementById('total')
    const purchaseButton = document.getElementById("make-Purchase");
    const applyButton = document.getElementById("apply-button");
    // edit elements
    priceText.innerText = 0;
    discountPrice.innerText = 0;
    totalprice.innerText = 0;
    purchaseButton.setAttribute("disabled", true);
    applyButton.setAttribute("disabled", true);

}
