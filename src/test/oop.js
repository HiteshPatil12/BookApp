class Person{
    constructor(age){
    this.age = age;
    }
    greeting(){
        console.log('testing OOP')
    }
    getAge(){
        console.log(this.age)
    }
}
let user = new Person(25)
// user.greeting();
user.getAge();