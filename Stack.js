//lets understand stack with a simple program to check weater a number is palindroke or not
//let start by declaring few variables
let stack=[];
let word="vaaadaaav";
let rWord="";
for(let i=0;i<word.length;i++){
    stack.push(word[i]);
}
for(let i=0;i<word.length;i++){
    rWord += stack.pop();
}
if(word===rWord){
    console.log("its a palindrome")
}else{
    console.log ("not a palindrome")
}
