let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "red"

document.getElementById("red").style.backgroundColor = "blue"

document.querySelector(".box").style.backgroundColor = "green"    //selects the first box with box class

//document.querySelectorAll(".box").style.backgroundColor = "green"    // does not work cuz this returns a collection

document.querySelectorAll(".box").forEach(e => { e.style.backgroundColor = "purple" })

e = document.getElementsByTagName("div")

e[2].matches("#red")    // returns true

e[3].closest("#red") //returns null

e[2].closest(".container") //returns the div.container

e[2].closest("html") //returns html 

document.querySelector(".container").contains(e[2]) // returns true if elemA contains elemB