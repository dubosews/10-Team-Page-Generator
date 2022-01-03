function generateMarkdown3(data) {
    return `<div class="card">
    <div class="header">
        <div class="name">
            ${data.name}
        </div>
        <div class="role">
            Intern
        </div>
    </div>
    <div class="cardBody">
        <div class="dataCard">ID #:  ${data.id}</div>
        <div class="dataCard">Email:   ${data.email}</div>
        <div class="dataCard">School:    ${data.school} </div>
    </div>
    <button onclick="create()">click</button>
</div>`
}
  module.exports = generateMarkdown3;
  