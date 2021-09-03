
function calculation() {

    var input = document.querySelectorAll('button')

    for (var i = 0; i < input.length; ++i) {

        input[i].onclick = function (e) {
            //var calculation = e.target.innerHTML; //get value of calculating
            console.log([e.target.innerHTML]);
            //document.getElementById('result').innerHTML = calculation // get value to <p></p>
            //document.getElementById('valueInput').value = calculation //get value to <input>
        }
    }
    return input;
}

console.log(calculation);


function myFunction() {

    var a = document.getElementById('valueInput').value;
    
    // var myArray = []
    // myArray.push(a);

    // console.log(Array.from([a], x => x));
    // var newValue = Array.from([a], x => x)

    //console.log(Array.from(a));

    var newValue = Array.of(a)

    // console.log(newValue);

    var dau = calculation()

    switch (dau) {
        case "+":
            newValue = newValue + newValue
            console.log(document.getElementById('result').innerHTML = newValue);
            break;
    
        default:
            break;
    }


}