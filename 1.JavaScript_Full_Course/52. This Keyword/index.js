// this = reference to a particular object
//        the object depends on the immediate context

const car = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    },

    colour : function(){
        console.log(`The car is ${this.color}`);
    }
}

console.log(car.model);
console.log(car.year);
car.drive();
car.colour();