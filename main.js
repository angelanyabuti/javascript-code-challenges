//OOP
//constructor function
function Person(fname, lname, dob) {
    this.fname = fname;
    this.lname = lname;
    this.dob =  new Date(dob);
}

//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
console.log(person1.dob.getFullYear())