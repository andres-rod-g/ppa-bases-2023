const connectToMongoDB = require("../../lib/mongodb");

const GetUser = async (req, res) => {

    console.log(req.query.username)

    if (!req.query.username){
        res.status(400).json({message: "No username provided"})
    }

    const db = await connectToMongoDB();

    const user = await db.collection("users").findOne({username: req.query.username})

    res.status(200).json({...user})
}

module.exports = GetUser