const {User} = require("../models")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const multer = require("multer")
const {uploadImage} = require("../middlewares/uploads/upload-img")
const {public_path} = require("../path_project")
const fs = require('node:fs/promises');
const path = require("path");


class UserController{
    async registerUser(req, res, next){
        try {
            const {name, email, password, numberPhone, type} = req.body
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);

            const user = await User.create({name, email, password: hashPassword, numberPhone, type})
            res.status(201).json(user)
        } catch (error) {
            res.status(403).json(error)
        }
        
    }

    async loginUser(req, res, next){
        try {
            const {email, password} = req.body;
            const user = await User.findOne({
                where: {
                    email
                }
            })
            if(!user){
                throw new Error("Không tìm thấy")
            }

            const token = jwt.sign(
                {email: user.email, type: user.type},
                 "tanghotrungnam",
                 {
                    expiresIn: 60*60*2
                 }
                 );
            const isAuth = await bcrypt.compare(password, user.password)

            if(isAuth){
                res.cookie('jwt',token, { secure: true, maxAge: 60*60*2 })
                .status(200)
                .send("Đăng nhập thành công!!!");
                 
            }else{
                res.status(401).send("Mật khẩu không đúng");
            }

        } catch (error) {
            
            res.status(404).json("Không tìm thấy!!!")
        }
    }
    
    async uploadAvatar(req, res, next){

        try {
            const user = await User.findOne({
                where: {
                    email: req.user.email
                }
            })
            if(!user){
                throw new Error()
            }
            if(user.avatar_path){
                const filename_avatar = user.avatar_path.split('/').at(-1)
                const pathImg = path.join(public_path, 'uploads', 'avatars', filename_avatar)
                try {
                    await fs.unlink(pathImg);
                } catch (error) {
                    
                }
                
            }
            const uploadImg = uploadImage(user.name).single("avatar");
            
            uploadImg(req, res, async(err)=>{
                
                if (err instanceof multer.MulterError) {
                    res.status(403).json(err)
                } else if (err) {
                    res.status(400).json(err)
                } else{
                    try {
                        const {host} = req.headers
                        const {filename} = req.file
                        
                        
                        
                        user.avatar_path = host+"/uploads/avatars/"+filename
                        await user.save();
                        res.status(200).json(user)
                    } catch (error) {
                        res.status(400).json("Loi")
                    }
                    
                }
            })
        } catch (error) {
            res.status(400).json(error)
        }
        
    }
        
}

module.exports = new UserController();