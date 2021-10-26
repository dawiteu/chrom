import convertNumber from "./chiffresr.js";

const btn = document.querySelector("#convert-btn"); 
const res = document.querySelector("#response"); 
let vis = false; 
let lastVal = 0; 


btn.addEventListener("click", function(e){
    e.preventDefault();
    const num = document.querySelector("#numb").value; 
    if(lastVal != num){
        lastVal=num; 
        console.log('convert click!', num);
        if(!vis){
            res.style.display = "block"; 
            vis=true; 
        }
        convertNumber(num);
    }
    
});
