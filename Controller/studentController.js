const students=require('../Model/studentModel')


exports.register= async (req,res)=>{
    const {firstname,lastname,email,gender,mobile,password,dob,adress,course}=req.body
    console.log("inside reg");
    try{
        
            const existingUser = await students.findOne({email})
            // console.log(existingUser);
            if(existingUser){
                res.status(406).json("Student already registered!!")

            }else{
                const newUser= new students({
                    firstname,lastname,email,adress,gender,password,mobile,dob,course
                })
                console.log("newUser: ",newUser);
                await newUser.save()
                res.status(200).json(newUser)
            }
    }catch(err){
        console.log("catch of controller reg");
        res.status(401).json(err)
    }
}

exports.getStudentDetails=async (req,res)=>{
    try{
        const details= await students.find()
        res.status(200).json(details)
    }catch(err){
        res.status(401).json(err)
    }
}