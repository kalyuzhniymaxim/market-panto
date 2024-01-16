

window.addEventListener('click', (e) => {
    let counter
  const action = e.target.dataset.action;
  // Проверяем клик строго по кнопкам Плюс любо Минус 
if(action === 'plus' || action === 'minus'){
    const counterWrapper = e.target.closest('.counter');
    counter = counterWrapper.querySelector('[data-counter]');
}
// проверяем является ли элемент по которуму был совершён клик кнопкой Плюс
  if (action === 'plus') {
    counter.innerHTML = ++counter.innerHTML;
  }
  
  // проверяем является ли элемент по которуму был совершён клик кнопкой Минус
  if (action === 'minus' && +counter.innerHTML > 1) {
    counter.innerHTML = --counter.innerHTML;
    // проверка на товар который находится в корзине

  }else if (e.target.closest('.cart1') && parseInt(counter.innerHTML) === 1) {
    e.target.closest('.cart1').remove()
    toggleCartStatus()

        }
        if (e.target.hasAttribute('data-action') && document.querySelector('.cart1-wrapper') ) {
          calcCartPrice ()
        }
});
