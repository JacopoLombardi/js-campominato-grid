
const containerCell = document.querySelector('._container_cell');
const btnStart = document.querySelector('.btn_start');

console.log(btnStart)




btnStart.addEventListener('click', function(){

   for( let i = 1; i <= 100; i++){
      containerCell.innerHTML += `<div class="_cell  d-flex">${i}</div>`;
   }



})



/////////// FUNCTIONS /////////////////
