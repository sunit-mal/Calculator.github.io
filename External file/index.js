function onefun() {
    var insert = document.getElementById("display").value
    document.getElementById("display").value = insert + "1"

}
function twofun() {
    var insert = document.getElementById("display").value
    document.getElementById("display").value = insert + "2"
}
function threefun() {
    var insert = document.getElementById("display").value
    document.getElementById("display").value = insert + "3"
}
function fourfun() {
    var insert = document.getElementById("display").value
    document.getElementById("display").value = insert + "4"
}
function fivefun() {
    var insert = document.getElementById("display").value
    document.getElementById("display").value = insert + "5"
}
function sixfun() {
    var insert = document.getElementById("display").value
    document.getElementById("display").value = insert + "6"
}
function sevenfun() {
    var insert = document.getElementById("display").value
    document.getElementById("display").value = insert + "7"
}
function eightfun() {
    var insert = document.getElementById("display").value
    document.getElementById("display").value = insert + "8"
}
function ninefun() {
    var insert = document.getElementById("display").value
    document.getElementById("display").value = insert + "9"
}
function zerofun() {
    var insert = document.getElementById("display").value
    document.getElementById("display").value = insert + "0"
}
function dotfun() {
    var insert = document.getElementById("display").value
    document.getElementById("display").value = insert + "."
}
function clearfun() {
    document.getElementById("display").value = null
}
function addfun() {
    var ans = document.getElementById("display").value
    var myArray = ans.split(" ");
    if (myArray.length == 3) {
        continueans(myArray)
    }
    var insert = document.getElementById("display").value
    document.getElementById("display").value = insert + ' + '
}
function subfun() {
    var ans = document.getElementById("display").value
    var myArray = ans.split(" ");
    if (myArray.length == 3) {
        continueans(myArray)
    }
    var insert = document.getElementById("display").value
    document.getElementById("display").value = insert + " - "
}
function mulfun() {
    var ans = document.getElementById("display").value
    var myArray = ans.split(" ");
    if (myArray.length == 3) {
        continueans(myArray)
    }
    var insert = document.getElementById("display").value
    document.getElementById("display").value = insert + " * "
}
function divfun() {
    var ans = document.getElementById("display").value
    var myArray = ans.split(" ");
    if (myArray.length == 3) {
        continueans(myArray)
    }
    var insert = document.getElementById("display").value
    document.getElementById("display").value = insert + " / "
}
function ans() {
    var ans = document.getElementById("display").value
    var myArray = ans.split(" ");

    let firstNum = Number(myArray[0]);
    let secondtNum = Number(myArray[2]);
    switch (myArray[1]) {
        case '+':
            var finalAns = firstNum + secondtNum;
            document.getElementById("display").value = finalAns
            break;
        case '-':
            var finalAns = firstNum - secondtNum;
            document.getElementById("display").value = finalAns
            break;
        case '*':
            var finalAns = firstNum * secondtNum;
            document.getElementById("display").value = finalAns
            break;
        case '/':
            var finalAns = firstNum / secondtNum;
            document.getElementById("display").value = finalAns
            break;

        default:
            break;
    }
}
function continueans(myArray) {
    let firstNum = Number(myArray[0]);
    let secondtNum = Number(myArray[2]);
    switch (myArray[1]) {
        case '+':
            var finalAns = firstNum + secondtNum;
            document.getElementById("display").value = finalAns
            break;
        case '-':
            var finalAns = firstNum - secondtNum;
            document.getElementById("display").value = finalAns
            break;
        case '*':
            var finalAns = firstNum * secondtNum;
            document.getElementById("display").value = finalAns
            break;
        case '/':
            var finalAns = firstNum / secondtNum;
            document.getElementById("display").value = finalAns
            break;

        default:
            break;
    }
}
function singleclear(){
    var insert = document.getElementById("display").value
    var newtext = insert.substring(0, insert.length - 1)
    document.getElementById("display").value = newtext
}


var change = document.getElementById("checkbox");
change.addEventListener('click',() =>
{
    let check = document.querySelector('input[type="checkbox"]:checked')
    if (check == null) {
        document.getElementById("main").style.backgroundImage="linear-gradient(skyblue,lightgreen)"
        document.getElementById("body").style.backgroundImage="linear-gradient(#00ff9d,#bb00ff)"
        document.getElementById("body").style.color="black"
    }
    else{
        document.getElementById("main").style.backgroundImage="linear-gradient(rgb(4, 68, 94),rgb(5, 99, 5))"
        document.getElementById("body").style.backgroundImage="linear-gradient(#005837,#3d0053)"
        document.getElementById("body").style.color="white"
    }
})