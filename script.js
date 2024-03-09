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
     console.log(name+"is studying");
  }
}

class Teacher extends Person {
  constructor(name, age){
    super(name,age);
  }
  teach() {
     console.log(name+"is teaching");
  }
}

const person = new Person("John", 25);
console.log(person.name); 

person.age = 30;
console.log(person._age);

const student = new Student("John", 22);
console.log(student.study( 'John'));
console.log(teacher.teach('John'));

const teacher = new Teacher("Alice", 40);
console.log(student.study('Alice'));
console.log(teacher.teach('Alice'));

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;