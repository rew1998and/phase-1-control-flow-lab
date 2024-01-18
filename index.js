function scuberGreetingForFeet(someValue){
  if (someValue === 199) {
return `This one is on me!`;
  // Write your code here!
} else if (someValue === 1500) {
  return `That will be twenty bucks.`;
} else if (someValue === 2001) {
  return `I will gladly take your thirty bucks.`;
} else {
  return `No can do.`;
}
}

function ternaryCheckCity(someValue){
  // Write your code here!
return someValue === `NYC`?`Ok, sounds good.`:`No go.`
}

function switchOnCharmFromTip(someValue){
  // Write your code here!
switch (someValue){
  case`generous`:
  return `Thank you so much.`
case`not as generous`:
return `Thank you.`
default:
 return `Bye.`
}
}