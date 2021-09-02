

function myfunction() {

    const a = parseFloat(document.getElementById('a').value)
    const b = parseFloat(document.getElementById('b').value)


    document.getElementById('result').innerHTML = sum;

}


function sum() {

    const a = parseFloat(document.getElementById('a').value)
    const b = parseFloat(document.getElementById('b').value)

    const Result = a + b;

    document.getElementById('result').innerHTML = Result;
}

function multiply() {
    const a = parseFloat(document.getElementById('a').value)
    const b = parseFloat(document.getElementById('b').value)

    const Result = a * b;

    document.getElementById('result').innerHTML = Result;
}

function division() {
    const a = parseFloat(document.getElementById('a').value)
    const b = parseFloat(document.getElementById('b').value)

    const Result = a / b;

    document.getElementById('result').innerHTML = Result;
}

function munius() {
    const a = parseFloat(document.getElementById('a').value)
    const b = parseFloat(document.getElementById('b').value)

    const Result = a - b;

    document.getElementById('result').innerHTML = Result;
}



console.log(document.getElementById('sum'));

