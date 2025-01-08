let mark = prompt("Enter the mark:");

switch (true) {
    case (mark <= 100 && mark >= 90):
        console.log("A");
        break;
    case (mark < 90 && mark >= 80):
        console.log("B");
        break;
    case (mark < 80 && mark >= 70):
        console.log("C");
        break;
    default:
        console.log("F");
        break;
}