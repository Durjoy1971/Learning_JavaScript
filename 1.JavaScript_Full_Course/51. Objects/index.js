// object = A group of properties and methods
//          properties = what an object has
//          methods = what an object can do
//          use . to access properties/methods

const car = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive : function(){
        console.log("You drive the car");
    },

    drive : function(){
        console.log("You Step on the brakes");
    }
}

console.log(car.model);
console.log(car.year);
car.drive();