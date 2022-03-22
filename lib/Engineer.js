const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
    engineerGenerate() {
        return `<div class="card">
    <div class="header">
        <div class="name">
            ${this.name}
        </div>
        <div class="role">
            Engineer
        </div>
    </div>
    <div class="cardBody">
        <div class="dataCard">ID #:  ${this.id}</div>
        <a href="mailto:${this.email}"><div class="dataCard">Email:   ${this.email}</div></a>
        <a href="https://github.com/${this.github}"><div class="dataCard">Github:    ${this.github} </div></a>
    </div>
    </div>`
    }
}

module.exports = Engineer;