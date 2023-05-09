let student = {

};

function addProperty(object, key, value){
object[key] = value;
};

addProperty(student, 'name', 'Fabrício');
addProperty(student, 'lastName', 'Diniz');
addProperty(student, 'email', 'fabriciohfd@gmail.com');
addProperty(student, 'phone', '+5531997731147');

console.log(student);