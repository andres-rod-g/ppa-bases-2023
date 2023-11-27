const connectToMongoDB = require("../../lib/mongodb");
const connectionMySQL = require("../../lib/mysql");
const CreateNewLog = require("../../lib/tools");

const GetAllUsers = async (req, res) => {
    const db = await connectToMongoDB();

    const user = await db.collection("users").find().toArray()

    CreateNewLog({
        type: "GET ALL USERS",
        description: ""
    })

    res.status(200).json(user)
}

module.exports = GetAllUsers