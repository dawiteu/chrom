import convertNumber from "./chiffresr.js";

const btn = document.querySelector("#convert-btn"); 
const res = document.querySelector("#response"); 
const spanResult = document.querySelector("#convertresult"); 
let vis = false; 
let lastVal = 0; 


btn.addEventListener("click", function(e){
    e.preventDefault();
    let num = document.querySelector("#numb"); 
    if(lastVal != num.value){
        if(num.value <= 9999){
            lastVal=num.value; 
            console.log('convert click!', num.value);
            if(!vis){
                res.style.display = "block"; 
                vis=true; 
            }
            let result = convertNumber(num.value);
            spanResult.innerHTML = result; 
        }else{
            num.value=1;
            alert(`Erreur : le chiffre max c'est 9999`);  
        }
    }else{ 
        num.value=1;
        alert('erreur valeur !');
    }
    
});
