const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  } 
  internGenerate() {
    return `<div class="card">
            <div class="header">
                <div class="name">
                    ${this.name}
                </div>
                <div class="role">
                    Intern
                </div>
            </div>
            <div class="cardBody">
                <div class="dataCard">ID #:  ${this.id}</div>
                <a href="mailto:${this.email}"><div class="dataCard">Email:   ${this.email}</div></a>
                <div class="dataCard">School:    ${this.school} </div>
            </div>
            </div>`
  }
}

module.exports = Intern;