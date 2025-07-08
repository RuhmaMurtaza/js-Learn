// Global and scope level 
// if their is a func within function the the scope level func can access the values of global func but 
// global func cannot 

// ##################3 there are two methods for func declaration #############################
// 1st 
function itemsAvailable(){

}

// 2nd 

const Market= function items(){

}

// we can call 1st func before or after its def  but 2nd  func can only call aftr it define 