const container = document.querySelector(".container");

function grid(row, column){
    for(let i = 0; i < column; i++){
        let line = document.createElement("div");
        for(let i = 0; i < row; i++){
            let square = document.createElement("div");
            square.textContent = "I am a div";
            line.appendChild(square);
        }
        container.appendChild(line);
    }
}

grid(16,16);



