document.querySelectorAll(".box").forEach(e => {
    e.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);;
    e.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);;
})