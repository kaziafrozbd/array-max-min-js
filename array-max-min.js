function arrayMax(numbers){
    let max = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;

}
let ages = [22,42,15,35,12,63,23,43,45];
let maxNumber = arrayMax(ages);
console.log('max number is: ',maxNumber);

// min number 
function arrayMin(marks){
    let min = marks[0];
    for(let i = 0; i < marks.length; i++){
        if(marks[i] < min){
            min = marks[i];
        }
    }
    return min;

}
let marks = [22,42,15,35,12,63,23,43,45];
let minNumber = arrayMin(marks);
console.log('min number is: ',minNumber);