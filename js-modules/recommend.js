var url = new URLSearchParams(window.location.search);

function getProducts(){
    return fetch("./components.json")
    .then(function(response){
        return response.json();
    })
    .then(function(components){
        return components.products;
    });
}


function getCategory(id){
   return getProducts().then(function(products){
      let product = products.find(function(product) {
          return product.id == id;
      });

      return product.category;
   })
}

function presentRecommendedProducts(){
    getCategory(url.get("id"))
    .then(function(category) {
        getProducts().then(function(products) {
            var filteredList = products.filter(function(product) {
                return product.category == category;
            });

            for(let i = 0; i < filteredList.length; i++){
                let r = Math.floor(Math.random()*i);
                let temp = filteredList[i];
                filteredList[i] = filteredList[r];
                filteredList[r]= temp;
            }
            let recommendContainer = document.querySelector(".recommendOtherProducts__images");
             
            for (let i = 0; i < 4; i++) {
                let product = filteredList[i];
                let a = document.createElement("a");
        
                let img = document.createElement("img");

                img.src = product.image;
                a.href = "product-view.html?id=" + product.id;

                a.appendChild(img);
                recommendContainer.appendChild(a);
                
            }
            console.log(filteredList);
        });
    });
}

export default presentRecommendedProducts;



