const userData= {
    Name: "Ruhma",
    Items: 7,
    price:100,
    Bill: function Customer() {
        console.log(`${this.Name} bought total ${this.Items} items`)
    }
}
// userData.Bill()

// "This" is used to point on objects items in the scope 

// ######################  Arrow func #######################

// arrow func are use full for one line codes

const discountApply= (Total) => {
   if(Total==1500){
    console.log(`${Total} on this price you will get 10% discount`)
    return 
   }
}

console.log(discountApply(1500))