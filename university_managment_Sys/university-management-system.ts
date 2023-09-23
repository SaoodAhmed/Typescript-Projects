// class Person {
//     name: string;
//     age: number;

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





class Person{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }
}


class Student extends Person{
    rollNumber:string
    courses:string[] = []
    constructor(name:string, age:number, rollNumber:string){
        super(name,age)                //Constuructor of a parent class
        this.rollNumber  = rollNumber;

    }

    registerForCourses(course:string){
        return this.courses.push(course)
    }
}




class Instructor extends Person{
    salary:number;
    courses:string[] = []
    constructor(name:string, age:number, salary:number){
        super(name,age)                   // constructor of a parent class
        this.salary = salary;
    }

    assignCourse(course:string){
        return this.courses.push(course)
        
    }
}

let student1 = new Student("Saud Ahmed", 23, "19sw72")


let Instructor1 = new Instructor("Saud Ahmed",23, 10000)
Instructor1.assignCourse("Metaverse")
console.log(Instructor1.courses)