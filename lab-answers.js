////////////////////////////////
// Easy Going
///////////////////////////////
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i += 2) {
    console.log(i);
}
////////////////////////////////
// Fizz Buzz
////////////////////////////////
for(let i=1;i<=100;i++) {
    if(i%3 === 0 && i%5 ===0){
        console.log("Fizz Buzz");
    } else if(i%3 === 0){
        console.log("Fizz");
    }
     else if(i%5 === 0){
        console.log("Buzz");
    }
     else {
        console.log(i);
    }
}
////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]++; 
wolfy[3]="Gotham City";
dart.push("Hawkins");
wolfy[0]="Gameboy";
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaturtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for(const ninjaturtle of ninjaturtles){
console.log(ninjaturtle.toUpperCase());
}
////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf('Titanic'));
console.log(favMovies.sort());
//console.log(favMovies);
console.log(favMovies.pop());
favMovies.push("Guardians of the Galaxy");
const reversedFavMovies = favMovies.reverse();
console.log(reversedFavMovies);
const removedMovie = favMovies.shift();
console.log("Removed movie: ",removedMovie);
console.log("Updated Arrya: ",favMovies);
const unshiftMovie = favMovies.unshift();
console.log("After unshift: ",unshiftMovie);
console.log("Original array after unshift: ",favMovies);
const movRemove = favMovies.indexOf('Django Unchained');
favMovies.splice(movRemove, 1, 'Avatar');
console.log("After splice: ",favMovies );
const midValue = favMovies.length/2;
const lastHalf = favMovies.slice(midValue);
console.log("last Half of the array: ",lastHalf);
console.log("ORiginal array: ",favMovies);//doesnt change the original array 
const findFandF = favMovies.indexOf('Fast and Furious');
console.log(findFandF);
console.log(favMovies.indexOf('Django Unchained'));//returns -1 if the result is not found