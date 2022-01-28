alert("hello!");


let petsName = prompt("what is your pets name?");
console.log(petsName)
alert(petsName)

let zodiac = prompt("whats your zodiac sign?");
console.log(zodiac)
alert(zodiac)

alert (petsName + zodiac);

function colorguessing(){
    let color = prompt ("whats my favorite color?");
    console.log (color)
    alert(color)
    while (color != 'green'){
        alert ("wrong answer");
        color = prompt ("whats my favorite color?");
    }
    alert("thats right");
}
colorguessing();

function displayImage(){
    let imageNumber = prompt ("How many pictures of Raven do you want to see?");
    console.log (imageNumber)
    if (imageNumber == ""){
        imageNumber = prompt ("How many pictures of Raven do you want to see?");
    } else {
        for (let i = 0; i < imageNumber; i++){
            console.log(i)
            document.getElementById("img").innerHTML += ('<img src="https://i.ibb.co/8rXCM1f/IMG-5397brester-series5.jpg" alt="IMG-5397brester-series5" border="0">');
        }
    } 
}
displayImage();


//DECLARING MY DANG FUNCTION
function petType () {
    //ask user what type of pet do you have?
let petType = prompt ('what type of pet do you have?');
alert
}

// pass data onto functions?

