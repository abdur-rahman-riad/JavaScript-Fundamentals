var myGrade = 79;

if (myGrade >= 80 && myGrade <= 100) {
    console.log("You Got A+ in Exam");
}
else if (myGrade >= 70 && myGrade < 80) {
    console.log("You Got A in Exam");
}
else if (myGrade >= 60 && myGrade < 70) {
    console.log("You Got A- in Exam");
}
else if (myGrade >= 50 && myGrade < 60) {
    console.log("You Got B in Exam");
}
else if (myGrade >= 40 && myGrade < 50) {
    console.log("You Got C in Exam");
}
else if (myGrade >= 0 && myGrade < 40) {
    console.log("You Fail");
}
else {
    console.log("Unvalid Marks");
}