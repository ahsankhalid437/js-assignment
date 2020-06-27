function getNumber(num) {

    var getnumber = document.getElementById("input");
    input.value += num;
}

function clearall() {
    var getnumber = document.getElementById("input");
    var getresult = document.getElementById("result");
    input.value = "";
    result.value = "";
}

function calculateResult() {
    var getnumber = document.getElementById("input");
    var getresult = document.getElementById("result");
    result.value = "= " + eval(input.value);
}

function clearone() {
    var getnumber = document.getElementById("input");
    var str = input.value;
    var num = str.length;
    var str1 = str.slice(0, num - 1);
    input.value = str1;
}