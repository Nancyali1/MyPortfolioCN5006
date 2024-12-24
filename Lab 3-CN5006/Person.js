// code for Exercise 3 (part 2) starts here:
class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getPersonInfo() {
        return "Name : " + this.name + " Age: " + this.age + " Email: " + this.email
    }
}

module.exports = Person;
