
function myBio(firstName, lastName, ...remainingData){
    return remainingData;
}

function callMyBio(){
    console.log(myBio("John", "Smith" , "painting", "gardening", "drawing"));
}

function copyHobbies(){
    let artHobby = ["drawing", "dancing"]
    let allHobbies = ["dancing", "singing", ...artHobby]
    console.log(allHobbies);
}

function arrayDestructuring(){
    let contactDetails = ["Priya", "Raj", 1234567890, "hello@gmail.com"];
    let [firstName, lastName, contact, email] = contactDetails;
    console.log(contact);
}

function objectDestructuring(){
    let contactDetails = {
                            firstName: "Priya", 
                            lastName: "Raj", 
                            mobile: 1234567890, 
                            email: "hello@gmail.com"};
    let {firstName, lastName, mobile, email} = contactDetails;
    console.log(mobile);
}