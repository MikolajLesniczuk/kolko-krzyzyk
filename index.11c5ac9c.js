const e=document.querySelectorAll(".cell"),t=document.querySelector(".reset");let c="X",l=!0;function r(t){if(!l)return;const r=t.target;var a;""===r.dataset.cell&&(r.innerText=c,r.dataset.cell=c,a=c,[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].some((t=>t.every((t=>e[t].dataset.cell===a))))?(alert(`Gracz ${c} wygrał!`),l=!1):[...e].every((e=>""!==e.dataset.cell))?(alert("Remis!"),l=!1):c="X"===c?"O":"X")}e.forEach((e=>{e.addEventListener("click",r)})),t.addEventListener("click",(function(){e.forEach((e=>{e.innerText="",e.dataset.cell=""})),c="X",l=!0}));
//# sourceMappingURL=index.11c5ac9c.js.map