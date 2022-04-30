const grid = document.getElementById('container');

let gg = document.querySelector('button');
gg.addEventListener('click', function() {
    getDivs(256);
});




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

slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    removeCells();
    grid.setAttribute('style', 'grid-template-rows: repeat(${val, 2fr); grid-template-columns: repeat(${val}, 2fr);');
    for (i = 0; i < val * val; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
        
        
        gridDiv.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        });
        container.appendChild(gridDiv);
    }
});

