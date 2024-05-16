document.getElementById('convert-button').addEventListener('click', function() {
    var numberInput = document.getElementById('number').value;
    var fromNumberSystem = document.getElementById('from').value;
    var toNumberSystem = document.getElementById('to').value;
    var result = convertNumber(numberInput, fromNumberSystem, toNumberSystem);
    document.getElementById('result').innerText = 'Result: ' + result;
});

function convertNumber(numberInput, fromNumberSystem, toNumberSystem) {
    var convertedNumber;

    if (fromNumberSystem === 'decimal') {
        if (toNumberSystem === 'binary') {
            convertedNumber = decimalToBinary(numberInput);
        } else if (toNumberSystem === 'octal') {
            convertedNumber = decimalToOctal(numberInput);
        } else if (toNumberSystem === 'hexadecimal') {
            convertedNumber = decimalToHexadecimal(numberInput);
        }
    } else if (fromNumberSystem === 'binary') {
        var decimalNumber = parseInt(numberInput, 2);
        if (toNumberSystem === 'decimal') {
            convertedNumber = decimalNumber.toString(10);
        } else if (toNumberSystem === 'octal') {
            convertedNumber = decimalToOctal(decimalNumber);
        } else if (toNumberSystem === 'hexadecimal') {
            convertedNumber = decimalToHexadecimal(decimalNumber);
        }
    } else if (fromNumberSystem === 'octal') {
        var decimalNumber = parseInt(numberInput, 8);
        if (toNumberSystem === 'decimal') {
            convertedNumber = decimalNumber.toString(10);
        } else if (toNumberSystem === 'binary') {
            convertedNumber = decimalToBinary(decimalNumber);
        } else if (toNumberSystem === 'hexadecimal') {
            convertedNumber = decimalToHexadecimal(decimalNumber);
        }
    } else if (fromNumberSystem === 'hexadecimal') {
        var decimalNumber = parseInt(numberInput, 16);
        if (toNumberSystem === 'decimal') {
            convertedNumber = decimalNumber.toString(10);
        } else if (toNumberSystem === 'binary') {
            convertedNumber = decimalToBinary(decimalNumber);
        } else if (toNumberSystem === 'octal') {
            convertedNumber = decimalToOctal(decimalNumber);
        }
    }
    return convertedNumber;
}

function decimalToBinary(decimalNumber) {
    return parseInt(decimalNumber, 10).toString(2);
}

function decimalToOctal(decimalNumber) {
    return parseInt(decimalNumber, 10).toString(8);
}

function decimalToHexadecimal(decimalNumber) {
    return parseInt(decimalNumber, 10).toString(16).toUpperCase();
}
