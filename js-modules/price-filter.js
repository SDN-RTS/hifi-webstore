
function priceFilter() {
    var url = new URLSearchParams(window.location.search)
    let itemsWrapper = document.querySelector("#shoppingList__showProductsList");
    var category = url.get("category")
    if(url.get("category")){
        getProducts()
        .then(function(products){
            itemsWrapper.innerHTML = "";
            products.forEach(product => {
                if(product.category == category){
                    let clone = window.shoppingList__showProductsList__template.content.cloneNode(true);
                    clone.querySelector(".shoppingList__img").src = product.image;
                    clone.querySelector(".shoppingList__imgContainer").alt = product.category;
                    clone.querySelector(".shoppingList__productName").innerText = product.name;
                    clone.querySelector(".shoppingList__productName").href = "product-view.html?id=" + product.id;
                    clone.querySelector(".shoppingList__priceTag").innerText += product.price;

                    itemsWrapper.appendChild(clone)
                }
            });
            let itemsNumberContainer = document.querySelector(".amountOfItems");
            let numProducts = document.querySelectorAll(".shoppingList__productListing");
            itemsNumberContainer.innerText = numProducts.length + " Item(s)"
        })
    }
    
    let priceBtns = document.querySelectorAll(".price-btns");
    for (let i = 0; i < priceBtns.length; i++) {
        let btn = priceBtns[i];
        let regex = /[+-]?\d+(\.\d+)?/g;
        let txt = btn.innerText;
        let floats = txt.match(regex)
        let minPrice = parseInt(floats[0]);
        let maxPrice = parseInt(floats[1]);
        getProducts()
        .then(function(products){
            let amount = 0;
            for (let i = 0; i < products.length; i++) {
                let product = products[i];
                if (product.price > minPrice && product.price < maxPrice){
                    amount++
                }
            }
            btn.innerText = "£" + minPrice + " - £" + maxPrice + "(" + amount + ")"
        })


        btn.addEventListener("click", function (event) {
            event.preventDefault();
            productSorter(event.target)
        })
    }
    function getProducts() {
        return fetch('./components.json')
        .then(function (response) {
            return response.json()
        })
        .then (function (data) {
            data = data.products;
            return data;
            
        })
    }
    function productSorter(btn) {
        getProducts()
        .then(function (products) {
            itemsWrapper.innerHTML = "";
            let regex = /[+-]?\d+(\.\d+)?/g;
            let txt = btn.innerText;
            let floats = txt.match(regex)
            let minPrice = parseInt(floats[0]);
            let maxPrice = parseInt(floats[1]);
            products.forEach(product => {
                if (product.price > minPrice && product.price < maxPrice){
                    let clone = window.shoppingList__showProductsList__template.content.cloneNode(true);
                    clone.querySelector(".shoppingList__img").src = product.image;
                    clone.querySelector(".shoppingList__imgContainer").alt = product.category;
                    clone.querySelector(".shoppingList__productName").innerText = product.name;
                    clone.querySelector(".shoppingList__productListing").href = "product-view.html?id=" + product.id;
                    clone.querySelector(".shoppingList__priceTag").innerText += product.price;




                    itemsWrapper.appendChild(clone)
                }
            });
        })
        let itemsNumberContainer = document.querySelector(".amountOfItems");
        let numProducts = document.querySelectorAll(".shoppingList__productListing");
        itemsNumberContainer.innerText = numProducts.length + " Item(s)"
    }

    
}
export default priceFilter;
