// in js the other versions of for loops are used to make the process of iteration easy.
// each version of for loop is for different  use 

// for of loop 

let itStudents=["Ruhma","Fatima","Aniqa"]

for (const i of itStudents) {
    //console.log(i);
}

const greetings = "Bonjour"

for (const i of greetings) {
    //console.log(i);
}

// #############     Map       #############

const map = new Map()
map.set('1',"Pakistan")
map.set('2',"China")
map.set('3',"Japan")

//console.log(map)

// ##############  for , of in map   ##############

for (const  [key,Value] of map) {
    console.log(key,Value)
}


 // ############# objects,for loop ##########

 const myObject={
    stangerThings:"America Series",
    theGlory:"Korean series"
 }

 // ######### for object we use for-in loop 

 for (const key in myObject) {
    console.log(`${key} is ${myObject[key]}`);  
 }


 // ########### arrays ##############

 const arr=['virtualsystems','datastructure','professionalpractices']
 for (const key in arr) {
    console.log(arr[key])
 }