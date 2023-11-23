// here goes your js code

// first syntax of function definition
function alertDemoFunction(){
    alert("Good Morning!");
}

// second syntax of function definition
let consoleDemoFunction = function(){
    console.log("Good Afternoon");
};

// third syntax of function definition(arrow functions)
let documentDemoFunction = () => {
    document.getElementById("one").innerHTML="<h2>Good Evening!</h2>";
    document.getElementById("two").innerText="<h2>Good Evening!</h2>";
};