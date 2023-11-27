const connectToMongoDB = require("../../lib/mongodb");
const connectionMySQL = require("../../lib/mysql");
const CreateNewLog = require("../../lib/tools");

const Remove = async (req, res) => {
    if (!req.body.username)
    {
        res.status(400).json({"message": "Not Enought data!"})
        return
    }

    const db = await connectToMongoDB();

    db.collection("users").deleteOne({username: req.body.username}).then(() => {
        res.status(200).json({"message": "Hecho!"})

        CreateNewLog({
            type: "REMOVED USER",
            description: req.body.username
        })

     }).catch((err) => {
        res.status(400).json({"message": "Base de datos dió error."})
        return
     })
}

module.exports = {Remove}