$(document).ready(function () {
    const size = 20
    let inputContainer = document.getElementById("input-container")

    for (let i = 1; i <= size; i++) {
        inputContainer.innerHTML += `<input type="number" class="inp" id=""inp${i}>`
    }

    $("#inp").focus();

    $("#Random").on("click", function () {
        for (let i = 1; i <= size; i++) {
            let box = document.getElementById(`inp${i}`)
            box.value = parseInt(Math.random() * 100)
            $(box).removeClass('max-highlight min-highlight')
        }
    })

    $("clrBtn").on("click", function () {
        for (let i = 1; i <= size; i++) {
            let box = document.getElementById(`inp${i}`)
            box.value = ""
            $(box).removeClass("max-highlight min-highlight")
        }
    })

    $("#Max").on("click", function () {
        for (let i = 1; i <= size; i++) {
            let box = document.getElementById(`inp${i}`)
            if (box.value === "") {
                Swal.fire({
                    icon: "warning",
                    title: "Boxes are empty",
                    text: "Please fill all the boxes.",
                    heightAuto: false,
                });
                return;
            }
        }
    })

    for(let i = 1; i <= size)
})