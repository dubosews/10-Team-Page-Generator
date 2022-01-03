/*function prepMark(data) {
    let length = data.length;
    for (var i = 0; i < length; i++) {
        let drop = data[i]
        let length1 = drop.length;
        for (var i = 0; i < length1; i++){
            let jump = drop[i]
            generateMarkdown2(jump)
        }
        
    }

}
*/

function generateMarkdown2(data) {

    
        console.log(data); 

    
    return `<div class="card">
    <div class="header">
        <div class="name">
            ${data.name}
        </div>
        <div class="role">
            Engineer
        </div>
    </div>
    <div class="cardBody">
        <div class="dataCard">ID #:  ${data.id}</div>
        <div class="dataCard">Email:   ${data.email}</div>
        <div class="dataCard">Github:    ${data.github} </div>
    </div>
    <button onclick="create()">click</button>
</div>`
}

  module.exports = generateMarkdown2;
  