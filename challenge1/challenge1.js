// ? STUDENT GRADE GENERATOR.

//* Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade as follows: 

//* A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.


// Take user's marks and is saved in the marks variable
const marks = parseInt(prompt("Please enter marks:", ""));

if (marks > 79) {
    alert("A");
} else if (marks > 60 && marks <= 79) {
    alert("B");
} else if (marks > 49 && marks <= 59) {
    alert("C");
} else if (marks > 40 && marks <= 49) {
    alert("D");
} else if (marks < 40) {
    alert("E");
}

