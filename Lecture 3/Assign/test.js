function countString(input, type) {
    
    if (typeof input !== "string" || typeof type !== "string") {
        throw Error();
    }

    switch (type.toUpperCase()){
        case "W":
            const words = input.trim().split(/\s+/);
            return input.trim() === "" ? 0 : words.length;
        case "V":
            const vowels = /[aeiou]/gi
            const vowel_match =  input.match(vowels)
            return vowel_match ? vowel_match.length : 0;
        case "C":
            return input.replace(/\s+/g, '').length
        default:
            return 0
        }

}

// Example usage
console.log("Word count:", countString("Hello world, how are you?", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8


module.exports = countString;
