const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
  managerGenerate() {
    
    return `<div class="card">
                <div class="header">
                    <div class="name">
                        ${this.name}
                    </div>
                    <div class="role">
                        Manager
                    </div>
                </div>
                <div class="cardBody">
                    <div class="dataCard">ID #:  ${this.id}</div>
                    <div class="dataCard">Email:   ${this.email}</div>
                    <div class="dataCard">Office Number:    ${this.officeNumber} </div>
                </div>
            </div>`

}
}
module.exports = Manager;