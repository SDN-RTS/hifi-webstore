    function getProducts() {
        return fetch("./components.json")
            .then(function (response) {
                return response.json()
            })
            .then(function (components) {
                return components.products;
            })
    }


    function showProducts(){
        getProducts() 
        .then(function (products) {
            let shoppingListTemplate = window.shoppingList__showProductsList__template;
            let shoppingList = document.querySelector("#shoppingList__showProductsList");


            products.forEach(function(product) {
                let clone = shoppingListTemplate.content.cloneNode(true);
                let productName = clone.querySelector(".shoppingList__productName");
                let productImg = clone.querySelector(".shoppingList__img");
                let productPrice = clone.querySelector(".shoppingList__priceTag");
                let productItem = clone.querySelector(".shoppingList__productListing");
                
                // let productList = document.querySelector("#shoppingList__showProductsList");
                
                productName.innerText = product.name;
                productItem.href = "product-view.html?id=" + product.id;
                productImg.src = product.image;
                productPrice.innerText += product.price;


                shoppingList.appendChild(clone);
                });
            })
            
        };
        showProducts()
    

// document.querySelector(".shoppingList__productListing").addEventListener("click", function(event) {
//     if(event.target.classList.contains(".shoppingList__productListing")) {
//         event.preventDefault
//         window.history.pushState({}, "", event.target.href);
//         var url = new URLSearchParams(window.location.search);
//         let container = document.querySelector(".shoppingList__productListing");
//         container.querySelectorAll("*").forEach(function(element){
//             element.remove();
//         });
//             showProduct(url.get("id"));
//         }
//     });





    
        
    
    
    // export default getProduct
