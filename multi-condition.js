var physicsPass = true;
var mathPass = true;
var chemistryPass = true;
var biologyPass = true;
var ictPass = false;
var englishPass = false;

if ((physicsPass == true && mathPass == true) && (ictPass == true || englishPass == true)) {
    console.log("Engineering Students");
}
else if ((chemistryPass == true && biologyPass == true) && (ictPass == true || englishPass == true)) {
    console.log("Medical Students");
}
else {
    console.log("National Students");
}