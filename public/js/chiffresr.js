const numbersProperty = {
    1: "I",
    2: "II", 
    3: "III",
    4: "IV",
    5: "V",
    6: "VI", 
    7: "VII",
    8: "VIII",
    9: "IX", 
    10: "X", 
        40: "XL", 
    50: "L", 
        90: "XC", 
    100: "C",
        140: "CD", 
        150: "D", 
        900: "CM", 
    1000: "M"
}
//console.log(numbersProperty[1]); 

const convertNumber = (number) => {
    console.log(`Try to convert : ${number}`);

    let arrays = Array.from(number); 
    arrays = arrays.reverse(); 
    console.log(`arrays : `, arrays); 
    console.log(`il y a : ${arrays.length} de chiffres ds ce nombre`); 
}

export default convertNumber; 