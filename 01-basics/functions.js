// funstion in js are benefical to use fucton multiple time in a code without the need to write the 
// same code agsin 

function loginUser(username){
    if(username === undefined){
       // console.log('Please Enter userName') 
        return
    }
    return `${username} just logged in `
}

//console.log(loginUser('Ruhii'))


// the fuction can contain parameters 
// 1. we need to do console log to call function
// 2. if duringsome conditions in function we want half func to execute use returen statment ater that no 
// other statement will execute


// ########################### object as arguement in func ############################

let userData = {
    Name : 'Ruhma' ,
    Price : 100
}

function user(anyobj){
    console.log(`The user ${anyobj.Name} has price ${anyobj.Price}`)
}

(user(userData))


//###################### if we want to pass multiple value we can do this ...(rest method) ###########

function multValues(... num1){
    return num1
}

console.log(multValues(200,300,1000))