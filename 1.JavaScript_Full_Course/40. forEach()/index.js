//array.forEach() = executes a provided callback function
//                  once for each array element

let students = ["spongebob", "patrick", "squidward"];

//array.forEach(function(currentValue, index, arr))
students.forEach(capitalize);
students.forEach(print);
students.forEach(index);

function capitalize(element, index, array){
  array[index] = element[0].toUpperCase() + element.substring(1);
}

// console.log(students[0]);

function print(element)
{
  console.log(element)
}

function index(element,index)
{
  console.log(`${element}  ${index}`);
}