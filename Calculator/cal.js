var displayData = document.getElementById("displayData");

function display(num) {
    displayData.value += num;
}

function Clear() {
    displayData.value = "";
}

function del() {
    displayData.value = displayData.value.slice(0, -1);
}

function equal() {
    try {
        displayData.value = eval(displayData.value);
    } catch {
        displayData.value = "error";
    }
}

function sin() {
    displayData.value = Math.sin(displayData.value);
}

function cos() {
    displayData.value = Math.cos(displayData.value);
}

function tan() {
    displayData.value = Math.tan(displayData.value);
}

function square() {
    displayData.value = Math.pow(displayData.value, 2);
}

function qubbed() {
    displayData.value = Math.pow(displayData.value, 3);
}

function sqr() {
    displayData.value = Math.pow(displayData.value, 1 / 2);
}

function operate() {}