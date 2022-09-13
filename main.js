console.log("Hey bitch")


function showAlert() {
    alert("You clicked the button!")
}
var totalCount = 0
let btnRef = document.getElementById("btn")
btnRef.addEventListener("click", showAlert)

let counter =document.getElementById("counter")
counter.innerHTML = totalCount

let add = document.getElementById("add")
let sub = document.getElementById("sub")
"" //empty strig
add.addEventListener("click", () => {
    totalCount++
    counter.innerHTML = totalCount
})
sub.addEventListener("click", () => {
    totalCount--
    counter.innerHTML = totalCount
})

//HW: Throw an alert saying that the counter does not support negative numbers
//once totalCount is 0 and I click subract again, show the alert saying negatives not supported

//I want an input on the page where I can enter my name and click submit and have it show on the page
//hint: need a variable that will hold the value in the text box on click of the submit button I want to create an element dynamically 
//that says whatever was typed in the input

//I want a button that will remove an elemnt from the page.