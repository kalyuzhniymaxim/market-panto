function toggleCartStatus() {
   
    const CartStatus = document.querySelector('.cart1-wrapper')
    const cartEmpy = document.querySelector('[data-cart-empty]')
    if(CartStatus.children.length > 0){
        cartEmpy.classList.add('none')
    }else{
        cartEmpy.classList.remove('none')
    }
}