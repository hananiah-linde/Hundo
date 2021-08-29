//Get the values from the Page
//starts or controller function
function getValues() {

    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert("You must enter integers");
    }

}

//Generate numbers from startValue to endValue
//logic function(s)
function generateNumbers(startValue, endValue) {

    let numbers = [];
    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index);
    }

    return numbers;

}

//display the numbers (with even numbers bold)
//display or view function(s)
function displayNumbers(numbers) {

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let number = numbers[index];
        if (number % 2 == 0) {
            templateRows += `<tr><td><strong>${number}</strong></td></tr>`;
        } else {
            templateRows += `<tr><td>${number}</td></tr>`;
        }

    }

    if (numbers.length == 0) {
        document.getElementById("results").innerHTML = `<tr><td>Start value must be less than end value</td></tr>`
    } else {
        document.getElementById("results").innerHTML = templateRows;
    }

}