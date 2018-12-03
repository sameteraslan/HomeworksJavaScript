
/*function addCourses(txt) {
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
}*/


class Database {
	constructor() {
		this.konut = new Map();
		this.isyeri = new Map();
		this.arsa = new Map();
		this.bina = new Map();
	}
}


