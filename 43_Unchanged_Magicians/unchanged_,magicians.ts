// unchanged Magicians: Start with your work from Exercise 48. Call the function make great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician : string[] = ['Harry Houdini','Hermione Granger','David Copperfield','David Blaine'];

function copyArray(arr:string[]){
    return [...arr]
}

function make_great ( magicianArry:string[] ){
for(let i=0; i<magicianArry.length; i++){

    magicianArry[i] = 'the Great ' + magicianArry[i]
    }
}
function show_magicians(magicians: string[]){

magicians.forEach(element => {
    console.log(element);
});
}

const copyMagicianArray = copyArray(magician)
make_great(copyMagicianArray);

console.log('\n\nThis is my orignal array:');
show_magicians(magician);

console.log( '\n\nThis is my modfied copy of the array:');
show_magicians(copyMagicianArray);