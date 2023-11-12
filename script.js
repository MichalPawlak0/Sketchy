const containerEl = document.querySelector(".container");
const btn=document.querySelector(".btn");

for (let i = 0; i < (16**2); i++) {
    const divAppendEl = document.createElement("div");
    divAppendEl.classList.add("grid-cell")
    containerEl.appendChild(divAppendEl);
}
const gridCellsEls = document.querySelectorAll(".grid-cell")
gridCellsEls.forEach((gridCellEl)=>{
    gridCellEl.addEventListener("mouseover",(event)=>{
        event.target.style.backgroundColor="#3af165"
    })
})
