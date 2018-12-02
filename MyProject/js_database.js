const url = "https://maeyler.github.io/JS/data/";
function readData(file) {
    console.log("readData "+file);
    if(file.includes("Students.txt")) {
      fetch(url+file)
          .then(r => r.text(), report)
          .then(addStudents, report);
    } 
	else if(file.includes("Courses.txt")) {
      fetch(url+file)
          .then(r => r.text(), report)
          .then(addCourses, report);
    }
	else {
		console.log("File could not find.")
	}
}
function parseStudent(line) {
    let b = line.split("\t");
    let id = b[0], name = b[1], gpa = b[2];
    let list = [];
    for (let i = 3; i < b.length; i++) 
        list.push(b[i]);
	//bayrak
    return new Student(b[0], b[1], b[2], list);
}
function parseCourse(line) {
	let b = line.split("\t");
	let name = b[0], time = b[1], date = b[2];
    let rooms = [];
    for (let i = 3; i < b.length; i++) 
		rooms.push(b[i]);
	//bayrak
    return new Course(b[0], b[1], b[2], rooms);
}
function addStudents(txt) {
    let msg = txt.length+" chars, ";
    let a = txt.split("\n");
    msg += a.length+" lines, ";
    for (let s of a) {
		let std = parseStudent(s);
		database.students.set(std.id, [std.name, std.gpa, std.courses]);
		//console.log(database.students.get(std.id));
		//keys.push(std.id); vals.push(std);
    }
    report(msg + database.students.size  + " students");
}
function addCourses(txt) {
    let msg = txt.length+" chars, ";
    let a = txt.split("\n");
    msg += a.length+" lines, ";
    for (let s of a) {
		let course = parseCourse(s);
		database.courses.set(course.name, [course.time, course.date, course.rooms]);
		//console.log(database.courses.get(course.name));
		//keys.push(std.id); vals.push(std);
    }
    report(msg + database.courses.size  + " students");
}
