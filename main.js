let answer = document.getElementById("answer").result

function convertToRoman() {

  let num = document.getElementById('num').value
   
   let romanNumeral = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
    
   }
   let result = "" 
   for(let elem in romanNumeral) {
     while(num >= romanNumeral[elem]) {
        result += elem;
        num -= romanNumeral[elem];
    }
   }
    answer.textContent = "hahahah"
}

console.log( convertToRoman(104) );