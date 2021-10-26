const numbers = [
    {   romVal: "I",    type:   1   },
    {   romVal: "V",    type:   2   },
    {   romVal: "X",    type:   1   },
    {   romVal: "L",    type:   2   },
    {   romVal: "C",    type:   1   },
    {   romVal: "D",    type:   2   },
    {   romVal: "M",    type:   1   },
    {   romVal: "(V)",  type:   2   },
    {   romVal: "(X)",  type:   1   }
]; 

const arraysNumbers = []; 


numbers.forEach((number, index) => {
    if(index % 2 === 0 && index !== numbers.length -1){
        let newTab = []; 
        let nextItem = numbers[index+1] !== undefined ? numbers[index+1] : false ; 
    
        newTab.push(
            number.romVal, 
            number.romVal + number.romVal, /// numbers[index+1].romVal 
            number.romVal + number.romVal + number.romVal, // numbers[index+1].romVal 
            number.romVal + nextItem.romVal,
            nextItem.romVal,
            number.romVal === "M" ? "(VI)"   : nextItem.romVal + number.romVal, 
            number.romVal === "M" ? "(VII)"  : nextItem.romVal + number.romVal + number.romVal, 
            number.romVal === "M" ? "(VIII)" : nextItem.romVal + number.romVal + number.romVal + number.romVal, 
            numbers[index+2] && number.romVal === "M" ? "(IX)" : number.romVal + numbers[index+2].romVal
        )
        arraysNumbers.push(newTab); 
    }
});


const convertNumber = (number) => {
    let response = []; 
    let arrays = Array.from(number); 
    arrays = arrays.reverse(); 

    arrays.forEach((numb, index) => numb !== "0" && response.push(arraysNumbers[index][numb-1]));
    response = response.reverse().join('');
    return response; 
}

export default convertNumber; 