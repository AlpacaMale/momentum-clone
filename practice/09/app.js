const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young");
} else if (18 <= age && age <= 50) {
  console.log("You can drink");
} else if (50 < age && age <= 80) {
  console.log("You should exercise");
} else {
  console.log("You can do whatever you want.");
}
