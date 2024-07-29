// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make great() that modifies the array of magicians by adding the phrase the Great to each magician's name. Call show _magicians() to see that the list has actually been modified.

let magicianNames = ['Harry Houdini','Hermione Granger','David Copperfield','David Blaine']; 
function show_magicians(great: string){ 

for(let item of magicianNames){
console.log(great, item); 
} 
};

show_magicians(" Hello, How are you Mr.");
show_magicians("\n Show Me The Magic Mr."); 