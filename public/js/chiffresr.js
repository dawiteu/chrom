const numbers = [
    { 
        romVal: "I", 
        type:   1, 
    },
    {
        romVal: "V",
        type:   2,
    },
    {
        romVal: "X",
        type:   1,
    },
    {
        romVal: "L",
        type:   2,
    },
    { 
        romVal: "C", 
        type:   1, 
    },
    {
        romVal: "D",
        type:   2,
    },
    {
        romVal: "M",
        type:   1,
    },
    {
        romVal: "(V)",
        type: 2
    },
    {
        romVal: "(X)",
        type: 1
    }
]; 
const arraysNumbers = []; 


numbers.forEach((number, index) => {
    if(index % 2 === 0 && index !== numbers.length -1){
        let newTab = []; 
        //newTab[0] = ""; 
        //newTab[1] = index > 1 ? numbers[index].type % 2 !== 0 ? 'f' : numbers[index].romVal : number.romVal; 
        ///newTab[2] = number.romVal+number.romVal; 
        //newTab[3] = number.romVal+number.romVal+number.romVal; 
        //newTab[4] = number+numbers[numbers.indexOf(number)+1];
        let thisItem = numbers[index]; 
        let beforeIt = numbers[index-1] !== undefined ? numbers[index-1] : false ; 
        let nextItem = numbers[index+1] !== undefined ? numbers[index+1] : false ; 
    
        //console.log(thisItem, beforeIt, nextItem)
        newTab.push(
            number.romVal, 
            numbers[index].type == 1 ? number.romVal + number.romVal : "---", /// numbers[index+1].romVal 
            numbers[index].type == 1 ? number.romVal + number.romVal + number.romVal : "----", // numbers[index+1].romVal 
            number.romVal + nextItem.romVal,
            nextItem.romVal,
            number.romVal === "M" ? "(VI)" :nextItem.romVal + number.romVal, 
            number.romVal === "M" ? "(VII)" :nextItem.romVal + number.romVal + number.romVal, 
            number.romVal === "M" ? "(VIII)" : nextItem.romVal + number.romVal + number.romVal + number.romVal, 
            //numbers[index].type == 1 ? number.romVal + numbers[index-1].romVal : numbers[index+1].romVal, 
            numbers[index+2] && number.romVal === "M" ? "(IX)" : number.romVal + numbers[index+2].romVal
        )
        //console.log(numbers[index].type);
        arraysNumbers.push(newTab); 
    }
});

console.log(arraysNumbers, 1 % 2 === 0, 2 % 2 === 0); 


//console.log(numbersProperty[1]); 

const convertNumber = (number) => {
    console.log(`Try to convert : ${number}`);

    let arrays = Array.from(number); 
    arrays = arrays.reverse(); 
    console.log(`arrays : `, arrays); 
    console.log(`il y a : ${arrays.length} de chiffres ds ce nombre`); 
}

export default convertNumber; 