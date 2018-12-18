function reverseString(str) {
    let arr = str.split('')
    let rev = arr.reverse()
    let result = rev.join('')
    return result
}


function reverseSentence(sentence) {
    let arr = sentence.split(' ')
    let rev = arr.reverse()
    let result = rev.join(' ')
    return result
}


function minimumValue(arr) {
    let minimum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i]
        }
     }
     return minimum
}


function maximumValue(arr) {
    let maximum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximum) {
            maximum = arr[i]
        }
    }
    return maximum
}


function calculateRemainder(numerator, denominator) {
    return numerator % denominator
}


function distinctValues(list) {
    arr = list.split(' ');
    let result = [];

    for (i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result.join(' ')
}


function distinctValuesCount(list) {
    arr = list.split(' ');

    let counts = {};
    let values = [];
    let result = '';

    for (i = 0; i < arr.length; i++) {
        if (!values.includes(arr[i])) {
            values.push(arr[i]);
            counts[arr[i]] = 1;
        } else {
            counts[arr[i]] =  counts[arr[i]] + 1;
        }
    }

    for(let i = 0; i < values.length; i++){
        result = result + values[i] + '(' + counts[values[i]] + ') '
    }
    
    return result;
}


function evaluateExpression(expression, values){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(i = 0; i < alphabet.length; i++){
        expression = expression.replace(alphabet[i],values[alphabet[i]])
    }
    return eval(expression);
}