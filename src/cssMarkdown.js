function generateMarkdown5(data) {
    return `
    .teamMembers {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
    }
    .card {
        background-color: rgb(0, 115, 255);
        width: 200px;
        border-radius: 20px;
        padding: 15px;
        font-family: Arial, Helvetica, sans-serif;
        margin: 10px;
        }

    .title {
        background-color: aliceblue;
        color: gold;
        font-size: 24pt;
        display: flex;
        justify-content: center;
        width: 400px;
        padding-top: 20px;
        height: 100px;
        border: 3px gold;
        border-radius: 20px;
        margin-left: auto;
        margin-right: auto;
    }
    .header {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 15px;
        padding: 15px;
        margin: 5px;
        
    }
    .name {
        font-size: 26pt;
        color: rgb(0, 115, 255);
    }
    .role {
        font-size: 14pt;
        color: rgb(255, 197, 49);
        text-align: right;
    }
    .dataCard {
        background-color: rgba(255, 255, 255, 0.701);
        color: rgb(0, 115, 255);
        text-align: center;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        margin: 10px;
        border-radius: 10px;
    }
    body {
        background-color: rgb(137, 225, 255);
        justify-content: center;
    }`
}
module.exports = generateMarkdown5;