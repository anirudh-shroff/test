$(document).ready(function(){
    const n1 = document.getElementById("num1");
    const n2 = document.getElementById("num2");
    const ansElement = document.getElementById("ans");

    $("#addition").on("click",function(){
        let num1 = Number(n1.value);
        let num2 = Number(n2.value);
        let result = num1 + num2

        console.log("Addition result : ", result);
        ansElement.value = result;
    })
    $("#subtraction").on("click",function(){
        let num1 = Number(n1.value);
        let num2 = Number(n2.value);
        let result = num1 - num2

        console.log("Addition result : ", result);
        ansElement.value = result;
    })
    $("#multiplication").on("click",function(){
        let num1 = Number(n1.value);
        let num2 = Number(n2.value);
        let result = num1 * num2

        console.log("Addition result : ", result);
        ansElement.value = result;
    })
    $("#division").on("click",function(){
        let num1 = Number(n1.value);
        let num2 = Number(n2.value);
        let result = num1 / num2

        console.log("Addition result : ", result);
        ansElement.value = result;
    })
})