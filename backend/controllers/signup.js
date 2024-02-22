import User from '../db/db.js'

export default async function signup(req, res) {
    
    const { username, email, password } = req.body;

    await User.create({
        username,
        email,
        password
    })

    res.json({msg: "signup successful"});
}