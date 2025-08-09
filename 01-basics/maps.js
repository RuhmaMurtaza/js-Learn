let numArr=[1,2,3,4,5,6,7,8,9]

// maps also  did automatic returns 

//console.log( numArr.map( (num) => num*10 ));

// chaining is also happens in that we add more maps at one time

let newArr = numArr.map((nums) => nums+5)
                   .map((nums) => nums>20)
                   .filter((nums) => { return nums/2==0} )
console.log(newArr)

