function search() {
    return fetch("./components.json")
        .then(response => response.json())
        .then(function(data){
            event.preventDefault();
            console.log(data);

            let userInput = document.querySelector('#search').value;
            if (userInput == '') {
                return;
            }

            let matches = data.products.filter(function(result){
                return result.name.includes(userInput.toLowerCase());
            });

            let card = document.querySelectorAll('.cards');
            card.forEach(element => {
                element.remove();
            });

            matches.forEach(element => {
                let clonedCard = document.querySelector('#card-template').content.cloneNode(true);
                clonedCard.querySelector('.name').innerText = element.name;
                document.querySelector('.card-container').appendChild(clonedCard);
            });
        })
}

export default search;