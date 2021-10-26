const numbers = ["I", "V", "X", "L", "C", "D", "M"]; 
const arraysNumbers = []; 


const groupNumbers = numbers.forEach((number, index) => {
    let newTab = []; 
    newTab[0] = ""; 
    newTab[1] = number; 
    newTab[2] = number+number; 
    newTab[3] = number+number+number; 
    newTab[4] = number+numbers[numbers.indexOf(number)+1];
    arraysNumbers.push(newTab); 
});

console.log(groupNumbers, arraysNumbers); 


//console.log(numbersProperty[1]); 

const convertNumber = (number) => {
    console.log(`Try to convert : ${number}`);

    let arrays = Array.from(number); 
    arrays = arrays.reverse(); 
    console.log(`arrays : `, arrays); 
    console.log(`il y a : ${arrays.length} de chiffres ds ce nombre`); 
}

export default convertNumber; 