// $(document).ready(function () {
//     const size = 20
//     let inputContainer = document.getElementById("input-container")

//     for (let i = 1; i <= size; i++) {
//         inputContainer.innerHTML += `<input type="number" class="inp" id=""inp${i}>`
//     }

//     $("#inp").focus();

//     $("#Random").on("click", function () {
//         for (let i = 1; i <= size; i++) {
//             let box = document.getElementById(`inp${i}`)
//             box.value = parseInt(Math.random() * 100)
//             $(box).removeClass('max-highlight min-highlight')
//         }
//     })

//     $("clrBtn").on("click", function () {
//         for (let i = 1; i <= size; i++) {
//             let box = document.getElementById(`inp${i}`)
//             box.value = ""
//             $(box).removeClass("max-highlight min-highlight")
//         }
//     })

//     $("#Max").on("click", function () {
//         for (let i = 1; i <= size; i++) {
//             let box = document.getElementById(`inp${i}`)
//             if (box.value === "") {
//                 Swal.fire({
//                     icon: "warning",
//                     title: "Boxes are empty",
//                     text: "Please fill all the boxes.",
//                     heightAuto: false,
//                 });
//                 return;
//             }
//         }
//     })

//     for(let i = 1; i <= size){
//         let box = document.getElementById(`inp${i}`)
//         $(box).removeClass("max-highlight")
//     }

//     let
// })


document.addEventListener("DOMContentLoaded", function () {
    const size = 10;
    const inputContainer = document.getElementById("input-container");

    // for dynamic input
    for (let i = 1; i <= size; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.className = "inp";
        input.id = `inp${i}`;
        inputContainer.appendChild(input);
    }

    // focus first input
    document.getElementById("inp1").focus();

    // random button
    document.getElementById("randomBtn").addEventListener("click", () => {
        console.log("random button clicked")
        for (let i = 1; i <= size; i++){
            const box = document.getElementById(`inp${i}`);
            box.value = Math.floor(Math.random() * 100);
            box.classList.remove("max-highlight", "min-highlight");
        }
    });

    // clear btn
    document.getElementById("clrBtn").addEventListener("click", () => {
        for (let i = 1; i <= size; i++){
            const box = document.getElementById(`inp${i}`);
            box.value = "";
            box.classList.remove("max-highlight", "min-highlight"); 
        }
    });

    // max button
    document.getElementById("maxBtn").addEventListener("click", () => {
        // for validation if boxes are empty
        for (let i = 1; i <= size; i++){
            if (document.getElementById(`inp${i}`).value ===""){
                alert("please fill the boxes or click 'random'");
                return;
            }
        }
        // remove old highlights
        for (let i = 1; i <= size; i++){
            document.getElementById(`inp${i}`).classList.remove("max-highlight");
        }

        let max = -Infinity;
        let maxInputField;
        for (let i = 1; i <= size; i++){
            const value = Number(document.getElementById(`inp${i}`).value);
            if (value > max){
                max = value;
                maxInputField = document.getElementById(`inp${i}`);
            }
        }

        maxInputField.classList.add("max-highlight");
        console.log(max);
    });

    // min button
    document.getElementById("minBtn").addEventListener("click", () => {
        // validation
        for (let i = 1; i <= size; i++){
            if (document.getElementById(`inp${i}`).value === ""){
                alert("please fill the boxes or click 'random'");
                return;
            }
        }

        let min = Infinity;
        let minInputField;
        for (let i = 1; i <= size; i++){
            const value = Number(document.getElementById(`inp${i}`).value);
            if (value < min){
                min = value;
                minInputField = document.getElementById(`inp${i}`);
            }
        }

        minInputField.classList.add("min-highlight");
        console.log(min);
    });
})