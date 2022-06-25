// Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {

    if (num == 0){
        return num
    } 
    else {

        for (let i = 0, len = num; i < len; i++) {
            let separateNum = (""+num).split("") 
            let squareNum = separateNum.map(function(val) { return val * val })
            let result = squareNum.join('')

             return parseInt(result)
        }
    }
}