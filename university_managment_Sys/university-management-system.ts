class Person{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    getName(){
        this.name;
    }
}



class Student extends Person{
    rollNumber:string
    courses:Course[] = []
    constructor(name:string, age:number, rollNumber:string){
        super(name,age)                // Constuructor of a parent class
        this.rollNumber  = rollNumber;
    }


    registerForCourses(course:Course){
        this.courses.push(course)
    }
}




class Instructor extends Person{
    salary:number;
    courses:Course[] = []
    constructor(name:string, age:number, salary:number){
        super(name,age)                   // constructor of a parent class
        this.salary = salary;
    }

    assignCourse(course:Course){
        this.courses.push(course)
        
    }
}


class Course{
    id:string;
    name:string;
    students:Student[] = [];
    instructors!:Instructor;

    constructor(id:string, name:string, ){
        this.id = id;
        this.name = name;
    }

    addStudent(student:Student){
        this.students.push(student)
        student.registerForCourses(this)
        
    }

    setInstructor(instructor:Instructor){
        this.instructors = instructor;
        instructor.assignCourse(this)
        

    }
}


class Department{
    name:string;
    courses:Course[] = []
    constructor(name:string){
        this.name = name;
    }

    addCourse(course:Course){
        this.courses.push(course)
    }
}




let student1 = new Student("Saud Ahmed", 23, "19sw72")
let student2 = new Student("Asad ",22,"19sw62")


let Instructor1 = new Instructor("Saud Ahmed",23, 10000)
let Instructor2 = new Instructor("Rashid Wassan",24, 10)

let course1 = new Course("1","BCC")
let course2 = new Course("2","Ai Generative")

let Department1 = new Department("Software Engineering")

course1.setInstructor(Instructor2)
course1.addStudent(student1)

Department1.addCourse(course1)
Department1.addCourse(course2)

console.log(Department1)
console.log(course1.instructors)


