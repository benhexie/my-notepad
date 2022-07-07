let textPos = 0;
const paper = [""];

document.addEventListener("keypress", e => {
    let pen = document.getElementsByClassName("text")[textPos];
    if(e.key === "Enter") {
        document.getElementsByClassName("paper")[0].insertAdjacentHTML("beforeend", 
            `<p class="text"></p>`
        );
        textPos++;
        paper.push("");
    }
    else {
        paper[textPos] += e.key;
        pen.innerText = paper[textPos];
    }
});

document.addEventListener("keydown", e => {
    let pen = document.getElementsByClassName("text")[textPos];
    if(e.key === "Backspace" && paper[textPos].length !== 0) {
        paper[textPos] = paper[textPos].substring(0, paper[textPos].length - 1);
        pen.innerText = paper[textPos];
    }
    else if(e.key === "Backspace" && paper[textPos].length === 0 && textPos !== 0) {
        if(textPos > 0)
            textPos--;
    }
});

window.addEventListener("beforeunload", e => {
    const message = "Do you really wanna do this comrade?";
    e.returnValue = message;
    return message;
});