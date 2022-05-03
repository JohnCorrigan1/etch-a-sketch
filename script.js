
//container containing grid defualt 16 * 16
const grid = document.getElementById('container');

//for rgb mode
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

//creates cells of divs in grid container
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

//change number of cells based on slider value
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


//reset button functionality sets all divs back to white and mode back to black
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

//rgb mode gets random color for each mouseover on grid
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

//default 16 * 16 grid
getDivs(256);