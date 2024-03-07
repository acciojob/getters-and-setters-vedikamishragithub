//complete this code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
	study() {
    return this.name + ' is studying ';
  }
}

class Teacher extends Person {
	teach() {
    return this.name + ' is teaching ';
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
