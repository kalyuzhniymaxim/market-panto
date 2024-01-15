 const cartWrapper = document.querySelector('.cart1-wrapper')

window.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
   let counter1 = card.querySelector('[data-cart]');
    if(counter1){
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.card__img').getAttribute('src'),
            title: card.querySelector('.card__title').innerText,
            counter: card.querySelector('[data-counter]').innerText,
            price: card.querySelector('.card__price').innerText
        }



        const cartItemHTML = `<div class="cart1">
        <article data-tab-value="bed" data-id="${productInfo.id}" class="card swiper-slide">
    
            <div class="card__photo">
                <img src="${productInfo.imgSrc}"  alt="Title" class="card__img">
            </div>
    
            <div class="card__desc">
    
                <a href="#category" class="card__category">Bed</a>
                <h3 class="card__title">${productInfo.title}</h3>
    
                <div class="counter">
                    <div class="counter__minus" data-action="minus">-</div>
                    <div class="counter__current" data-counter>${productInfo.counter}</div>
                    <div class="counter__plus" data-action="plus">+</div>
                </div>
    
                <div class="card__price" data-value="$">${productInfo.price}</div>
  
                </div>
    
            </div>
        </article>
    </div>`


    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
    }
})
