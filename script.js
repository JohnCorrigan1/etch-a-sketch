const grid = document.getElementById('container');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



function removeCells() {
   let child = grid.lastElementChild;
   while (child) {
       grid.removeChild(child);
       child = grid.lastElementChild;
   }
}


function getDivs(n) {
    let container = document.getElementById("container");

    for (i = 0; i < n; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
      

        gridDiv.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        });

        container.appendChild(gridDiv);
    }
};

let slider = document.getElementById('slider');
const sliderVal = document.getElementById('slider-value');


slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    sliderVal.textContent = val;
    removeCells();
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (i = 0; i < val * val; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
        
        
        gridDiv.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        });
        container.appendChild(gridDiv);
    }
});

let reset = document.getElementById('reset');
reset.addEventListener('click', function(){
    removeCells();
    let val = document.getElementById('slider').value;
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (i = 0; i < val * val; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');

        gridDiv.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        });
        container.appendChild(gridDiv);
    }
});

let rgb = document.getElementById('rgb');
rgb.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for(let i = 0; i < val * val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColor();
        })
    }
  
});


getDivs(256);