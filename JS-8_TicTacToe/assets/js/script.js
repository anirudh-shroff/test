let container = document.getElementById("dabba");

for (let i = 1; i <= 9; i++) {
    // container.innerHTML = container.innerHTML + `<button class="box">${i}</button>`; alternative and cleaner syntax written below
    container.innerHTML += `<button class="box" id="b${i}"></button>`;
}

let counter = 0;

// swalfire
function fireAlert(winner) {
    swal({
        title: `Player ${winner} won`,
        text: "You clicked the button!",
        icon: "success",
        button: "Okay!",
    });
}

// for first row

let flag = true;

function checkwin(symbol) {
    // console.log(symbol)
    for (let i = 1; i <= 3; i++) {
        let val = document.getElementById(`b${i}`).innerHTML;
        if (val != symbol) {
            flag = flase
            break
        }
        // console.log(symbol);
    }
    if (flag) {
        fireAlert(symbol);
        return true;
    }
}

// for second row

function checkwin(symbol) {
    // console.log(symbol)
    for (let i = 4; i <= 6; i++) {
        let val = document.getElementById(`b${i}`).innerHTML;
        if (val != symbol) {
            flag = flase
            break
        }
        // console.log(symbol);
    }
    if (flag) {
        fireAlert(symbol);
        return true;
    }
}

// for third row

function checkwin(symbol) {
    // console.log(symbol)
    for (let i = 1; i <= 3; i++) {
        let val = document.getElementById(`b${i}`).innerHTML;
        if (val != symbol) {
            flag = flase
            break
        }
        // console.log(symbol);
    }
    if (flag) {
        fireAlert(symbol);
        return true;
    }
}

// for first coloumn
function checkwin(symbol) {
    // console.log(symbol)
    for (let i = 1; i <= 7; i += 3) {
        let val = document.getElementById(`b${i}`).innerHTML;
        if (val != symbol) {
            flag = flase
            break
        }
        // console.log(symbol);
    }
    if (flag) {
        fireAlert(symbol);
        return true;
    }
}

// for second column

function checkwin(symbol) {
    // console.log(symbol)
    for (let i = 2; i <= 8; i += 3) {
        let val = document.getElementById(`b${i}`).innerHTML;
        if (val != symbol) {
            flag = flase
            break
        }
        // console.log(symbol);
    }
    if (flag) {
        fireAlert(symbol);
        return true;
    }
}

// for third column

function checkwin(symbol) {
    // console.log(symbol)
    for (let i = 3; i <= 9; i += 3) {
        let val = document.getElementById(`b${i}`).innerHTML;
        if (val != symbol) {
            flag = flase
            break
        }
        // console.log(symbol);
    }
    if (flag) {
        fireAlert(symbol);
        return true;
    }

    return false;
}

// for diagonals, right to left

function checkwin(symbol) {
    // console.log(symbol)
    for (let i = 3; i <= 7; i += 2) {
        let val = document.getElementById(`b${i}`).innerHTML;
        if (val != symbol) {
            flag = flase
            break
        }
        // console.log(symbol);
    }
    if (flag) {
        fireAlert(symbol);
        return true;
    }
}

// for diagonals, left to right

function checkwin(symbol) {
    // console.log(symbol)
    for (let i = 1; i <= 9; i += 4) {
        let val = document.getElementById(`b${i}`).innerHTML;
        if (val != symbol) {
            flag = flase
            break
        }
        // console.log(symbol);
    }
    if (flag) {
        fireAlert(symbol);
        return true;
    }
}

$(document).ready(function () {
    $(".box").on("click", function (e) {
        let box = this;

        if (box.innerHTML == "") {
            if (counter % 2 == 0) {
                box.innerHTML = "X";
            } else {
                box.innerHTML = "O"
            }
            counter++;
        } else {
            alert("click on the empty area");
        }

        if (counter >= 5) {
            const win = checkwin(box.innerHTML);

            if (counter == 9) {
                if (win == false) {
                    swal({
                        title: `It's a Draw`,
                        // text: "You clicked the button!",
                        // icon: "success",
                        button: "Okay!",
                    });
                }
            }
        }
    })
})

