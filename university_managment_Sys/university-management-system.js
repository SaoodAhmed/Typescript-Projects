// class Person {
//     name: string;
//     age: number;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     getName(): string {
//         return this.name;
//     }
// }
// class Student extends Person {
//     id: number;
//     courses: Course[];
//     constructor(name: string, age: number, id: number) {
//         super(name, age);
//         this.id = id;
//         this.courses = [];
//     }
//     registerForCourse(course: Course): void {
//         this.courses.push(course);
//     }
// }
// class Instructor extends Person {
//     salary: number;
//     courses: Course[];
//     constructor(name: string, age: number, salary: number) {
//         super(name, age);
//         this.salary = salary;
//         this.courses = [];
//     }
//     assignCourse(course: Course): void {
//         this.courses.push(course);
//     }
// }
// class Course {
//     id: number;
//     name: string;
//     students: Student[];
//     instructor!: Instructor;
//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//         this.students = [];
//     }
//     addStudent(student: Student): void {
//         this.students.push(student);
//     }
//     setInstructor(instructor: Instructor): void {
//         this.instructor = instructor;
//     }
// }
// class Department {
//     name: string;
//     courses: Course[];
//     constructor(name: string) {
//         this.name = name;
//         this.courses = [];
//     }
//     addCourse(course: Course): void {
//         this.courses.push(course);
//     }
// }
// const student1 = new Student('Alice', 20, 12345);
// const student2 = new Student('Bob', 21, 12346);
// const instructor1 = new Instructor('Eve', 30, 40000);
// const instructor2 = new Instructor('Charlie', 35, 45000);
// const course1 = new Course(1, 'Introduction to Computer Science');
// const course2 = new Course(2, 'Advanced Programming');
// const department1 = new Department('Computer Science');
// department1.addCourse(course1);
// department1.addCourse(course2);
// student1.registerForCourse(course1);
// student2.registerForCourse(course1);
// course1.addStudent(student1);
// course1.addStudent(student2);
// course1.setInstructor(instructor1)
// console.log(student1.getName()); // Output: Alice
// console.log(student1.courses); // Output: [Course]
// console.log(instructor1.courses); // Output: [Course]
// console.log(department1.courses); // Output: [Course, Course]
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, rollNumber) {
        var _this = _super.call(this, name, age) //Constuructor of a parent class
         || this;
        _this.courses = [];
        _this.rollNumber = rollNumber;
        return _this;
    }
    Student.prototype.registerForCourses = function (course) {
        return this.courses.push(course);
    };
    return Student;
}(Person));
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(name, age, salary) {
        var _this = _super.call(this, name, age) // constructor of a parent class
         || this;
        _this.courses = [];
        _this.salary = salary;
        return _this;
    }
    Instructor.prototype.assignCourse = function (course) {
        return this.courses.push(course);
    };
    return Instructor;
}(Person));
var student1 = new Student("Saud Ahmed", 23, "19sw72");
var Instructor1 = new Instructor("Saud Ahmed", 23, 10000);
console.log(Instructor1.assignCourse("Metaverse"));
console.log(Instructor1.courses);
