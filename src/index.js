module.exports = function toReadable (number) {
    var result = [];   
    var stage = 0;
    while (true) {
        var last_number = number % 10;
        var word = get_word(last_number);
        number = Math.floor(number / 10);

        if (stage == 0 && number % 10 == 1) {
            word = add_teen(word);
            number = Math.floor(number / 10);
            stage++;
        }
        else if (stage == 1) {
            word = add_ty(word);
        }
        else if (stage == 2)
            word += " hundred";

        if (word != "zero")
            result.push(word);
        if (number == 0)
            break;
        stage++;
    }
    result.reverse();
    return result.length > 0
        ? result.join(" ")
        : "zero";
}

function get_word(number) {
    switch (number) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
    }
}

function add_ty(word) {
    switch (word) {
        case "zero":
            return "zero";
        case "one":
            return "ten";
        case "two":
            return "twenty";
        case "three":
            return "thirty";
        case "four":
            return "forty";
        case "five":
            return "fifty";
        case "eight":
            return word + "y";
        default:
            return word + "ty";
    }
}

function add_teen(word) {
    switch (word) {
        case "zero":
            return "ten"
        case "one":
            return "eleven";
        case "two":
            return "twelve";
        case "three":
            return "thirteen";
        case "five":
            return "fifteen";
        case "eight":
            return word + "een";
        default:
            return word + "teen";
    }
}
