const cardBtns = document.getElementsByClassName('card-btn');


document.getElementById('card-click').addEventListener('click', function(e){

    if(e.target.className.includes("card-btn")){
        const cardButton = e.target;

        const cardImg = cardButton.parentNode.parentNode.childNodes[1].childNodes[1].src;
        const cardTitle = cardButton.parentNode.parentNode.childNodes[3].childNodes[3].innerText;
        const cardPrice = cardButton.parentNode.parentNode.childNodes[3].childNodes[5].childNodes[0].innerText;

        const convertCardPriceNum = Number(cardPrice)
        
        const totalPriceField = Number(document.getElementById('total-price-value').innerText);

        const totalQty = Number(document.getElementById('total-qyt-value').innerText)
        document.getElementById('total-qyt-value').innerText = totalQty + 1;

        const total = convertCardPriceNum + totalPriceField;
        document.getElementById('total-price-value').innerText = total.toFixed(2);

        const cardContainer = document.getElementById('cart-container');

        const div = document.createElement('div');

        div.innerHTML = `
        
        <div id="child-div" class="flex justify-between items-center    bg-gray-300 p-2 rounded-lg">
            <div><img class="w-10" src="${cardImg}" alt=""></div>
            <div>
                <h1>${cardTitle}</h1>
                <p>${cardPrice} TK</p>
            </div>
        </div>
        
        `

        cardContainer.appendChild(div)

    }
})