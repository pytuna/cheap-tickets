function authorize(arrayType){
    return (req, res, next)=>{
    try {
        const {user} = req;
        const check = arrayType.findIndex((e)=>{
            return e === user.type;
        })
        if(check!==-1){
            next();
        }else{
            throw new Error()
        }
        
    } catch (error) {
        res.status(403).send("Khong co quyen")
    }
    }
}

module.exports = {
    authorize,
}