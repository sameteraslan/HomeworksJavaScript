class Course {
    constructor(name, time, date, rooms) {
        this.name = name;
        this.time = time;
        this.date = date;
        this.rooms = rooms;    
    }
    
    toString() {
        return "name: " + this.name + " time:" + this.time + " date:" + this.date + " rooms:" + this.rooms;
    }
}

class Student {
    constructor(id, name, gpa, courses) {
        this.id = id;
        this.name = name;
        this.gpa = gpa;
        this.courses = courses;    
    }
    toString() {
        return "id: " + this.id + " name:" + this.name + " gpa:" + this.gpa + " courses:" + this.courses;
    }
}
class Database {
	constructor() {
		this.students = new Map();
		this.courses = new Map();
	}
}

