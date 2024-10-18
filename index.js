document.getElementById("count-el").innerText=0;
let count= 0;
function increment(){
    count = count+1
    console.log(count)
    document.getElementById("count-el").innerText=count;
}

// Function to save the current count
function save() {
    let saveStr = count + " - ";
    let saveEl = document.getElementById("save-el");
    saveEl.innerHTML += saveStr;
    count = 0;
    document.getElementById("count-el").innerHTML = count;
}
