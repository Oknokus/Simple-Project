class Products {
    render() {
        let htmlCatalog = ``;
        
        CATALOG.forEach(({id, name, img, price}) => {
            htmlCatalog += `
                <li class="products_card"> 
                    <span class="products_card__name">${name}<span/>
                    <img class="products_card__img" src="${img}" alt="photo">
                    <span class="products_card__price" >${price}<span/>
                    <button class="products_card_btn">Добавить кнопку</button>
                </li>`;             
        });  
        const html = `
            <ul class="products_container">
                ${htmlCatalog}
            </ul>`;   

        ROOT_PRODUCTS.innerHTML = html
    };   
       
}

const productsPage = new Products();
productsPage.render();
