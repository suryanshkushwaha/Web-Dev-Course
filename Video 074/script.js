// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=> {
    // alert("I was clicked")
    document.querySelector(".box").innerHTML = "Yay you were clicked. Nice!!"
})
button.addEventListener("contextmenu", ()=> {
    alert("Dont hack us by right click please!")
    // document.querySelector(".box").innerHTML = "Yay you were clicked. Nice!!"
})
document.addEventListener("keydown", (e)=> {
   console.log(e, e.keyCode)
    // document.querySelector(".box").innerHTML = "Yay you were clicked. Nice!!"
})
