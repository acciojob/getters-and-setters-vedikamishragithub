class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name(){
    return this._name;
  }
  set age(newAge){
    this._age = newAge;
  }
}

class Student extends Person {
  constructor(name, age){
    super(name,age);
  }
  study() {
     return this._name + ' is studying ';
  }
}

class Teacher extends Person {
  constructor(name, age){
    super(name,age);
  }
  teach() {
    return this._name + ' is teaching ';
  }
}

const person = new Person("John", 25);
console.log(person.name); 

person.age = 30;
console.log(person._age);

const student = new Student("Alice", 22);
console.log(student.study());

const teacher = new Teacher("Bob", 40);
console.log(teacher.teach()); 


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
