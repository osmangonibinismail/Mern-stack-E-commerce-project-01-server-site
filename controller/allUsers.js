async function allUsers(req,res){
    try {
        console.log("userId all user",req.userId)

        res.json({
            message : "All user"
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}
module.exports = allUsers