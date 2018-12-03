const url = "https://sameteraslan.github.io/HomeworksJavaScript/MyProject/text_files/";
function readData(file) {
    console.log("readData "+file);
    if(file.includes("konut.txt")) {
      fetch(url+file)
          .then(r => r.text(), report)
          .then(addKonut, report);
    } 
	else if(file.includes("isyeri.txt")) {
      fetch(url+file)
          .then(r => r.text(), report)
          .then(addIsyeri, report);
    }
	else {
		console.log("File could not find.")
	}
}
function parseKonut(line) {
    let b = line.split("\t");
    return b;
}

/*function parseCourse(line) {
	let b = line.split("\t");
	let name = b[0], time = b[1], date = b[2];
    let rooms = [];
    for (let i = 3; i < b.length; i++) 
		rooms.push(b[i]);
	//bayrak
    return new Course(b[0], b[1], b[2], rooms);
}*/
function addKonut(txt) {
    //let msg = txt.length+" chars, ";
    let a = txt.split("\n");
    //msg += a.length+" lines, ";
    for (let s of a) {
		let std = parseKonut(s);
		database.konut.set(b[0], [b[1], b[2], b[3], b[4], b[5], b[6]]);
		//console.log(database.students.get(std.id));
		//keys.push(std.id); vals.push(std);
    }
    //report(msg + database.students.size  + " students");
}
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
