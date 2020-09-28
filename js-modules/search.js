function searchFunction() {
    document.querySelector('form').addEventListener('submit', function(event){
        event.preventDefault();
        fetch("./components.json")
            .then(response => response.json())
            .then(function(data){
                let shoppingListTemplate = window.shoppingList__showProductsList__template;
                let shoppingList = document.querySelector("#shoppingList__showProductsList");

                let userInput = document.querySelector('#search').value;
                if (userInput == '') {
                    data.products.forEach(element => {
                        let clone = shoppingListTemplate.content.cloneNode(true);
                        let productName = clone.querySelector(".shoppingList__productName");
                        let productImg = clone.querySelector(".shoppingList__img");
                        let productPrice = clone.querySelector(".shoppingList__priceTag");
                        let productItem = clone.querySelector(".shoppingList__productListing");
                        
                        productName.innerText = element.name;
                        productItem.href = "product-view.html?id=" + element.id;
                        productImg.src = element.image;
                        productPrice.innerText += element.price;

                        shoppingList.appendChild(clone);
                    });
                }

                let matches = data.products.filter(function(result){
                    return result.name.toLowerCase().includes(userInput);
                });

                console.log(matches)

                let card = document.querySelectorAll('.shoppingList__productListing');
                card.forEach(element => {
                    element.remove();
                });

                matches.forEach(element => {
                    let clone = shoppingListTemplate.content.cloneNode(true);
                    let productName = clone.querySelector(".shoppingList__productName");
                    let productImg = clone.querySelector(".shoppingList__img");
                    let productPrice = clone.querySelector(".shoppingList__priceTag");
                    let productItem = clone.querySelector(".shoppingList__productListing");

                    // let productList = document.querySelector("#shoppingList__showProductsList");

                    productName.innerText = element.name;
                    productItem.href = "product-view.html?id=" + element.id;
                    productImg.src = element.image;
                    productPrice.innerText += element.price;


                    shoppingList.appendChild(clone);
                });
            })
    })
}

export default searchFunction;
