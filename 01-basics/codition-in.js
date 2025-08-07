// in that we learn about if, else , operators , break ststements and truthy , falsy 
// we also learn about checking is the object or array is empty or not

let userEmail= "ruhmaamurtaza@gmail .com"

if(userEmail.length==0){
    console.log("Empty")
}else{
    console.log("the string is not empty")
}

// we can also check the objects 

let obj={}

if(Object.keys(obj).length==0){
    console.log("empty")
}