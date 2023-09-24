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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        this.name;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, rollNumber) {
        var _this = _super.call(this, name, age) // Constuructor of a parent class
         || this;
        _this.courses = [];
        _this.rollNumber = rollNumber;
        return _this;
    }
    Student.prototype.registerForCourses = function (course) {
        this.courses.push(course);
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
        this.courses.push(course);
    };
    return Instructor;
}(Person));
var Course = /** @class */ (function () {
    function Course(id, name) {
        this.students = [];
        this.id = id;
        this.name = name;
    }
    Course.prototype.addStudent = function (student) {
        this.students.push(student);
        student.registerForCourses(this);
    };
    Course.prototype.setInstructor = function (instructor) {
        this.instructors = instructor;
        instructor.assignCourse(this);
    };
    return Course;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.courses = [];
        this.name = name;
    }
    Department.prototype.addCourse = function (course) {
        this.courses.push(course);
    };
    return Department;
}());
var student1 = new Student("Saud Ahmed", 23, "19sw72");
var student2 = new Student("Asad ", 22, "19sw62");
var Instructor1 = new Instructor("Saud Ahmed", 23, 10000);
var Instructor2 = new Instructor("Rashid Wassan", 24, 10);
var course1 = new Course("1", "BCC");
var course2 = new Course("2", "Ai Generative");
var Department1 = new Department("Software Engineering");
course1.setInstructor(Instructor2);
course1.addStudent(student1);
Department1.addCourse(course1);
console.log(Department1);
console.log(course1.instructors);
