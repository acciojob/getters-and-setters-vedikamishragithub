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
     console.log(this.name + " is studying");
  }
}

class Teacher extends Person {
  constructor(name, age){
    super(name,age);
  }
  teach() {
     console.log(this.name + " is teaching");
  }
}

const person = new Person("John", 25);
console.log(person.name); 

person.age = 30;
console.log(person._age);

const student = new Student("John", 22);
const teacher = new Teacher("Alice", 40);
student.study();
teacher.teach();

const student1 = new Student("Alice", 22);
const teacher1 = new Teacher("John", 40);
student1.study();
teacher1.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;