const bcrypt = require("bcrypt")
const users = require("../model/model")
const jwt = require("jsonwebtoken")
require("dotenv").config()
exports.Register=async(req,res)=>{
    //register new user
    const {password,email}=req.body
    try {
        const found = await users.findOne({email}) 
        if(found){
          res.status(400).send({errors:[{msg:"email exist"}]})
        }else{
            const user = new users(req.body)
            const salt = 10
            const hashPassword = bcrypt.hashSync(password,salt)
            user.password=hashPassword
            const payload={id:user._id} 
            const token = jwt.sign(payload,process.env.SecretorKey)
            await user.save()
            res.status(200).send({msg : "ok",user,token})
        }
      
    } catch (error) {
        res.status(500).send("not samir")

    }
}
exports.Login=async(req,res)=>{
    const {email,password}= req.body
    try {
        const user = await users.findOne({email})
        if(!user ){
            res.status(400).send({errors:[{msg:"user not exist"}]})
        }else{
            const match = bcrypt.compareSync(password,user.password)
            if(!match){
                res.status(400).send({errors:[{msg:"wrong password"}]})

            }else{
                const payload={id:user._id} 
                const token = jwt.sign(payload,process.env.SecretorKey)
            res.status(200).send({msg : "ok",user,token})
            }
        }
    } catch (error) {
        res.status(500).send("not samir")
    }
}