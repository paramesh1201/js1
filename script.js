
// task1: fizzbuzz
function num(){
    for(let i =1;i<=100;i++)
        if((i%3==0)&&(1%5==0))
        {
            console.log("FIZZBUZZ")
        }
        else if(i%3==0){
            console.log("FIZZ")
        }
        else if(i%5==0){
            console.log("BUZZ")
        }
        else{
            console.log(i);
        }
}
num();


// task 6: 
// //celcius to fahrenheit

let celsius=prompt("celcius:")
let fahrenheit=celsius*1.8+32;
console.log(fahrenheit+"F");


// factorial number
function factorial(num){
    let  result = 1;
    for(let i=num;i>1;i--){
        result*=i;
    }
    return result;
}
console.log(factorial(5));

// //task2 : pallindrome

function isPalindrome(str){
    let first=0;
    let last=parseInt(str.length-1);
    let flag=0;

    while(first<last){
        if(str.charAt(first)!==str.charAt(last)){
            console.log("Not Palindrome");
            flag=1;
        }
        first++;
        last--;
    }
    if(flag===0){
        console.log("Palindrome");
    }
}
isPalindrome();

// // // task3: largest number

 function largestNumber(arr){
    let largest=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
largest=arr[i];
        }
    }
    console.log(largest);
 }
 largestNumber(arr);