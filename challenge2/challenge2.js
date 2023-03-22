// Takes user speed and saves it in the speed variable.
const speed = parseInt(prompt("What's the speed:", ""))

// const points = function (speed) {
//     return (speed - 70) / 5;
// };

if (speed < 70) {
    alert("Ok");
} else {
    // Function that calculates the demerit points
    const points = speed => Math.floor((speed - 70) / 5);

    if (points(speed) > 12) {
        alert("License suspended");
    } else {
        alert(`Points: ${points(speed)}`);
    }
}