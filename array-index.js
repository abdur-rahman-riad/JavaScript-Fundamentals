// Index Number of Array Element
var randomNumber = [20, 63, 18, 15, 81];
var position = randomNumber.indexOf(63);
console.log(position);
var randomName = ['USA', 'Bangladesh', 'India', 'Russia'];
var countryIs = randomName.indexOf('Bangladesh');
var noCountry = randomName.indexOf("Myanmar");
console.log(countryIs);
console.log(noCountry);

// Print Value of Specific Index
console.log(randomName[1]);

// Update Index Value in Array
var randomValue = [12, 15, 18, 20, 25];
console.log(randomValue);
randomValue[1] = 10;
console.log(randomValue);