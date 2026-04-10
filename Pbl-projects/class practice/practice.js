
/*let text = "janvi";  
let len = text.length;
let vowelCount = 0;
let constantCount = 0;

for (let i = 0; i < len; i++) {
   let ch = text[i].toLowerCase();

    if (ch >= 'a' && ch <= 'z') {
        if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
            vowelCount++;
        } else {
            constantCount++;
        }
    }
}

document.getElementById("demo").innerHTML = 
    "Vowels: " + vowelCount + "<br>Consonants: " + constantCount;*/

    


/*let str = "hello janvi";
let len = str.length
let reversed ="";
for( let i = len - 1 ; i >= 0 ; i--) {
    reversed += str[i];
}
document.getElementById("demo").innerHTML ="reverse:" + reversed ; */




/*let num1 = "1";
let num2 = 2;

if(num1 === 1){
    console.log("num is 1");
}
else{
    console.log("num is not 1");
}*/



/*let arr = [1,21,3,4,54,6,7,10];
max = arr[0]
min = 32400
for(let i of arr) {
    if(i>max){
        max = i
    }
    if(i<min){
        min = i
    }
}*/


/*let str = "naman";
let len = str.length;
let reversed = "";

for (let i = len - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log("Original: " + str);
console.log("Reverse: " + reversed);

    }
}*/


// practical program to illustrate the working of equality (==) and strict  equality (===) operators using multiple examples.
/*// Example 1
let a = 5;
let b = "5";
console.log("a == b :", a == b);  
console.log("a === b:", a === b);  

// Example 2
let x = 0;
let y = false;
console.log("x == y :", x == y);   
console.log("x === y:", x === y);*/



// create an array of numbers and print only even numbers.
/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);*/


//Write a functions that returns the sum of all digits in a numbers.
/*function sumDigits(number) {
  let sum = 0;
  let numString = String(Math.abs(number));
  for (let i = 0; i < numString.length; i++) {
    sum += parseInt(numString[i]);
  }
  return sum;
}*/



/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);
const oddNumbers = numbers.filter(number => number === 0);
console.log(oddNumbers);*/



console.log(document.getElementById('para'));
console.log(document.getElementsByClassName('myclass'));
console.log(document.getElementsByTagName("h6"));
console.log(document.querySelector("section"));
console.log(document.querySelectorAll("h6"));
console.log(document.querySelectorAll(".myclass"));
console.log(document.querySelectorAll("#para"));
console.log(document.getElementById("para").innerHTML);
console.log(document.getElementById('para').textContent);
document.getElementById('para').textContent = "My father is a farmer.";
document.getElementById('para').innerHTML = "<h1>Changed content</h1>";
console.log(document.getElementById("Inputbox").value);
let toggleEffect = () => {
    let btn = document.getElementById("hellojanvi");
    let para = document.getElementById("para")
    if (btn.innerHTML === "show") {
        para.style.display ="none" //for hide first line
        btn.innerHTML = "hide";
    } else {
        para.style.display ="block" //for display first line
        btn.innerHTML = "show";
    }
};

const para = document.createElement("p");
const node = document.createTextNode("I am from sagar");
para.appendChild(node);
const  element = document.getElementById("div");
element.appendChild(para);

//inline
//block
//inline-block
//flex
//none


//todo list
   //input+submit
   //js
   //input element fetch
   //create element
   //insert data into element
        //insert data element into div


    
function addTodo() {
  const input = document.getElementById("todoInput");
  const task = input.value;
  
  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  const para = document.createElement("p");
  para.textContent = task;

  const btn = document.createElement("button");
  btn.textContent = "Delete";

  btn.onclick = function() {
    para.remove();
    btn.remove();
  };

  const list = document.getElementById("todoList");
  list.appendChild(para);
  list.appendChild(btn);

  input.value = "";
}
























