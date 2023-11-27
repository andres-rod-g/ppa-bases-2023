const connectionMySQL = require("./mysql");

const CreateNewLog = async ({type, description}) => {
    const temp = {
        date: new Date().toISOString().slice(0, 19).replace("T", " "),
        type: type,
        description: description
    }

    console.log("About to ask to create")

    connectionMySQL.query(`INSERT INTO logs SET ?`, temp, (err, result, fileds) => {
        if (err) {
            console.log("ERROR CREATING LOG!")
            console.log(err)
            return
        }

    });
    

}

module.exports = CreateNewLog