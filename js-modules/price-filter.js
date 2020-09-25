
function priceFilter() {
    var url = new URLSearchParams(window.location.search)
    let itemsWrapper = document.querySelector("#shoppingList__showProductsList");
    var category = url.get("category")
    if(url.get("category")){
        itemsWrapper.innerHTML = "";
        getProducts()
        .then(function(products){
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
        })
    }
    
    let priceBtns = document.querySelectorAll(".price-btns");
    for (let i = 0; i < priceBtns.length; i++) {
        let btn = priceBtns[i];
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
            var regex = /[+-]?\d+(\.\d+)?/g;
            let txt = btn.innerText;
            var floats = txt.match(regex)
            var minPrice = parseInt(floats[0]);
            var maxPrice = parseInt(floats[1]);
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
    }

    
}
export default priceFilter;
