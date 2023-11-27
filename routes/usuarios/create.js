const connectToMongoDB = require("../../lib/mongodb");
const connectionMySQL = require("../../lib/mysql");
const CreateNewLog = require("../../lib/tools");

const Create = async (req, res) => {

    if (!req.body.username || !req.body.password)
    {
        res.status(400).json({"message": "Not Enought data!"})
        return
    }

    const db = await connectToMongoDB();

    db.collection("users").insertOne({
    ...req.body
    }).then(async () => {
        res.status(200).json({"message": "Hecho!"})

        await CreateNewLog({
            type: "CREATE USER",
            description: req.body.username
        })

        return
    }).catch((err) => {
    res.status(400).json({"message": "Base de datos dió error."})
    return
    })

}

module.exports = {Create}