function calcCartPrice (){
// const cartWrapper = document.queueMicrotask('.cart1-wrapper')
const cartItem = document.querySelectorAll('.cart1')
const totalPriceEl = document.querySelector('.total__price')
const deliveriCost = document.querySelector('.deliveri__cost')
let totalPrice = 0

cartItem.forEach(item =>{
    const price = item.querySelector('.card__price').innerHTML
    const counter = item.querySelector('[data-counter]').innerHTML
    const currentPrice = parseInt(price) * parseInt(counter)
totalPrice += currentPrice
})
totalPriceEl.innerHTML = totalPrice
if(totalPrice > 0 ){
    deliveriCost.classList.remove('none')
}else{
    deliveriCost.classList.add('none')
}
if (totalPrice > 600) {
    deliveriCost.classList.add('free')
    deliveriCost.innerHTML = 'доставка бесплатно'
}else {
    deliveriCost.classList.remove('free')
}
}