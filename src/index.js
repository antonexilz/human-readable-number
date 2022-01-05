module.exports = function toReadable(number) {
    let number_ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let number_tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let number_teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let number_hundred = "hundred";

    if (number < 10) {
        return number_ones[number];
    } else if (number >= 10 && number <= 19) {
        return number_teens[number - 10];
    } else if (number >= 20 && number <= 99) {
        return (
            number_tens[Math.floor(number / 10)] +
            `${
                Math.floor(number % 10) == 0
                    ? ""
                    : " " + number_ones[number % 10]
            }`
        );
    } else if (number > 99) {
        return (
            number_ones[Math.floor(number / 100)] +
            ` ${number_hundred}` +
            `${
                Math.floor((number % 100) / 10) == 0
                    ? ""
                    : " " + number_tens[Math.floor((number % 100) / 10)]
            }` +
            `${
                Math.floor(number % 100) >= 10 && Math.floor(number % 100) <= 19
                    ? number_teens[Math.floor((number % 100) - 10)]
                    : Math.floor(number % 10) === 0
                    ? ""
                    : " " + number_ones[Math.floor(number % 10)]
            }`
        );
    }
};
