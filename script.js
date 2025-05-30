const container = document.querySelector(".container");

function grid(row, column){
    for(let i = 0; i < column; i++){
        let squareRow = document.createElement("div");
        for(let i = 0; i < row; i++){
            let square = document.createElement("div");
            square.classList.add("square");
            squareRow.appendChild(square);
        }
        container.appendChild(squareRow);
    }
}

grid(16,16);



