const container = document.querySelector(".container");
const gridBtn = document.querySelector(".grid-btn");

function grid(gridSize){
    let squareSize = (548 / gridSize) ;
    
    for(let i = 0; i < gridSize; i++){
        const squareRow = document.createElement("div");
        for(let i = 0; i < gridSize; i++){
            const square = document.createElement("div");
            square.style.height = `${squareSize}px`;
            square.style.width = `${squareSize}px`;
            square.classList.add("square");
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "yellow";
            })
            squareRow.appendChild(square);
        }
        container.appendChild(squareRow);
    }
}

grid(16);
gridBtn.addEventListener("click", () => {
    let val = prompt("Please Insert the size you want:")
    while(true){
        if(val > 0 && val <= 100) {
            container.textContent = "";
            grid(val);
            break
        }else {
            val = prompt("Please Enter a number between 0 and 100");
        }
    }
});



