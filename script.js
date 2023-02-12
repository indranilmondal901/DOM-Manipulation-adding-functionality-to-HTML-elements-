const mainDiv = document.getElementById("main")
function changeColor() {
    const colorArray = ["red", "blue", "green", "yellow", "violet", "pink", "black", "#f8f8f8", "orange", "white"]
    mainDiv.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)]
}

let count = 0;
function addChild() {
    ++count;
    const child = document.createElement("div");
    child.innerText = count;
    child.classList.add("newChildDiv")
    mainDiv.appendChild(child)
}
document.getElementById("removeChild").addEventListener("click",
    function removeChild() {
        const targetChild = mainDiv.getElementsByClassName("newChildDiv");
        // console.log(targetChild)
        if (targetChild.length > 0) {
            let lastChild = targetChild[targetChild.length - 1];
            mainDiv.removeChild(lastChild);
            // alert(`your child div no ${lastChild.innerText} is now deleted`);
        } else {
            alert("no child div / inner box present");
        }
        // console.log(targetChild);
        // console.log(targetChild.length);
        if (targetChild.length != 0) {
            count = targetChild[targetChild.length - 1].innerText;
        } else {
            count = 0;
        }
    }
)
