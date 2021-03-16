
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real" Jaden-Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"

// Note that the Java version expects a return value of null for an empty string or null.

// Solution:
// To begin I know I'm going to use the method toUpperCase()
// I know that I'll be taking in a string and converting it to an array
// Then, I want to manipulate the array changing the index of the first letter of the element
// Then, I want to use substr to return the rest of the word
// Then, I want to join the string back together again and return the new string


const mySentence = "Fresh Prince is the greatest show ever";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

words.join(" ");
