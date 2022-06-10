// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string
function fakeBin(str){
    let updatedStr = "";
    for (let i=0; i<str.length;i++){
        if(Number (str[i]) >= 5) {
            updatedStr += "1"
        } else {
            updatedStr += "0"
        }
    } 
     return updatedStr
}
