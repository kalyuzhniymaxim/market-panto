const productsContainer = document.querySelector('#products');
getProducts()
async function getProducts () {
    const respons = await fetch('./js/products.json')
    
    const productArray = await respons.json()
    renderProducts (productArray)
} 
  

function renderProducts (productArray){
    productArray.forEach(el => {
        
        const renderHtml = `
        <article data-tab-value="chair" data-id="${el.id}" class="card swiper-slide">
        <!-- <a href="#product-page" class="card__link"></a> -->
        <div class="card__photo">
          <img
            src="${el.imgSrc}"
            srcset="./img/products/chair-01@2x.png 2x"
            alt="Title"
            class="card__img"
          />
        </div>

        <div class="card__desc">
          <a href="#category" class="card__category">Chair</a>
          <h3 class="card__title">${el.title}</h3>

          <div class="counter">
            <div class="counter__minus" data-action="minus">-</div>
            <div class="counter__current" data-counter>1</div>
            <div class="counter__plus" data-action="plus">+</div>
          </div>

          <div class="card__footer">
            <div class="card__price" data-value="$">${el.price}</div>
            <button data-cart type="button" class="card__btn">
              Add to cart
              <img data-cart src="./img/icons/plus.svg" alt="Add to cart" />
            </button>
          </div>
        </div>
      </article>
        `
        productsContainer.insertAdjacentHTML('beforeend', renderHtml)
    });

}


