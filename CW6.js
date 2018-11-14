"use strict";
class Course {
  constructor(name, time, date) {
    this.name = name
    this.time = time
    this.date = date
    this.rooms = []
  }
  addRooms(...room) {
    for (let r of room) this.rooms.push(r)
    return this
  }
  toString() {
    return this.name;
  }
}

class Student {
  constructor(id, name, gpa) {
    this.id = id
    this.name = name
    this.gpa = gpa
    this.courses = []
  }
  addCourses(...course) {
    for (let c of course) this.courses.push(c)
    return this
  }
  toString() {
    return this.name +": "+this.gpa;
  }
}


