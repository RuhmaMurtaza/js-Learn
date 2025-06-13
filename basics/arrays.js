// to merge two arrays we can use the following methods to do this :

//push function( this will not merge arrays properly but it can create array within array )

let netflixSeries=["SquidGame", "Wednesday", "strangersThing"]
let koreanDramas=["demon","crashLanding","QueenOfTears"]

//netflixSeries.push(koreanDramas)
//console.log(netflixSeries)

//concat( in this we use another variable then store arays in it by merging it through use of concat)

let netflixShows=netflixSeries.concat(koreanDramas)
//console.log(netflixShows)

// The last method is using Spread to merge arrays it is more convinient
let AllnetflixShows=[...netflixSeries,...koreanDramas]
//console.log(AllnetflixShows)

//##################### Flat use in arrays to convert nested array into single array #####################

let Nested_Array=[1,2,3,[4,5],7,[8,9,[10]]]
let flat_array=Nested_Array.flat(Infinity)
console.log(flat_array)

//The other functions used in arrays are from ,isArray thatcan convert string into arrays!!
