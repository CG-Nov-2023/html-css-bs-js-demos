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

function arrayDestructuringDemo(){
    let allColors = ["red", "blue", "green"];
    // let c1 = allColors[0];
    // let c2 = allColors[1];
    // let c3 = allColors[2];
    let [c1, c2, c3] = allColors;
    console.log(c3);
}

function objectDestructuringDemo(){
    let personDetails = {
        firstName: "John",
        lastName: "Smith",
        displayFullName: ()=>lastName+" "+fullName
    }

    let {firstName, lastName} = personDetails;
    console.log(firstName);
}

function restOperatorDemo(){
    callRestOperator("John", "Smith", "Painting", "Drawing", "Coloring");
    callRestOperator("Will", "Con", "Gardening", "Dancing");
};

function callRestOperator(firstName, lastName, ...hobbies){
    console.log(hobbies);
};

function spreadOperatorDemo(){
    let darkColors = ["red", "blue", "black"];
    let lightColors = ["pink", "lavender"];
    let allColors = ["grey", ...darkColors, ...lightColors];
    console.log(allColors);
};