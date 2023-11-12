const containerEl = document.querySelector(".container");
const btn=document.querySelector(".btn");
let color =100;
let inc=true;

for (let i = 0; i < (16**2); i++) {
    const divAppendEl = document.createElement("div");
    divAppendEl.classList.add("grid-cell")
    containerEl.appendChild(divAppendEl);
}
let gridCellsEls = document.querySelectorAll(".grid-cell");
gridCellsEls.forEach((gridCellEl)=>{
    gridCellEl.addEventListener("mouseover",(event)=>{
        event.target.style.backgroundColor=`rgb(${color},${color},${color})`;
    })
})

btn.addEventListener("click",(event)=>{
    const userSelectedGridSize = prompt("What's the new grid size?");

    if (userSelectedGridSize>0&&userSelectedGridSize<100) {
        gridCellsEls=document.querySelectorAll(".grid-cell");
        gridCellsEls.forEach((gridEl)=>{
        containerEl.removeChild(gridEl);
        });
        containerEl.style=`grid-template-columns:repeat(${userSelectedGridSize},1fr)`;
        for (let i = 0; i < (userSelectedGridSize**2); i++) {
            const divAppendEl = document.createElement("div");
            divAppendEl.classList.add("grid-cell");
            divAppendEl.style=`height:${90/userSelectedGridSize}vh`;
            divAppendEl.addEventListener("mouseover",(event)=>{
                event.target.style.backgroundColor=`rgb(${color},${color},${color})`;
                if(color<=255&&color>=0&&inc) color++;
                else if(color<=255&&!inc) color--;
                if(color===0){inc=true;}
                if(color===255){inc=false;}
            })
            containerEl.appendChild(divAppendEl);
        }
    } else {
        alert("Please select size between 0 and 100");
    }
})