// const minus = document.querySelectorAll('[data-action="minus"]')
// const plus = document.querySelectorAll('[data-action="plus"]')
// const counter = document.querySelectorAll('[data-counter]')
// console.log(plus)
// minus.addEventListener('click', function () {
//     if(+counter.innerHTML > 1){
//         counter.innerHTML = --counter.innerHTML
//     }
// })

// plus.addEventListener('click', function () {
//     counter.innerHTML = ++counter.innerHTML
// })

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
  }
});
