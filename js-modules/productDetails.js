
var url = new URLSearchParams(window.location.search)
showProduct(url.get("id"));

function getProductDetails(){
    return fetch("./components.json")
    .then(function(response){
        return response.json();
    })
    .then(function(components){
        return components.products;
    });
}

function showProduct(id){
    getProductDetails().then(function(products){
        products.forEach(product => {
            if(product.id == id){
                document.querySelector(".productInfoWrapper__name").innerText = product.name;
                document.querySelector(".productInfoWrapper__afterPrice").innerText = product.price;
                document.querySelector(".productImageWrapper__image").src = product.image;
                document.querySelector(".productViewMain__manufactor").innerText = product.manufactor;
                document.querySelector(".productViewMain__warranty").innerText = product.warranty;
                document.querySelector(".productViewMain__amplifier").innerText = product.category;
                document.querySelector(".productImageWrapper__image").alt = product.category;

            }
        });
    })    
}

export default showProduct;





