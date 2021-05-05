const Router = require('express');
const bcrypt = require('bcrypt');
const User = require('./../models/user');
const jwt = require('jsonwebtoken');
const config = require('./../config/config');

const router = Router();

router.post('/register', async (req, res) => {
    try{
        const {
            user:{
            email,
            number, 
            password, 
            name, 
            surname, 
            patronymic, 
            sex, 
            registrationAddress, 
            mainAddress,
            }, 
            member
        } = req.body;
        const candidate = await User.findOne({email});

        
        if(candidate) {
            return res.status(400).json({massage: 'Пользователь уже существует'});
        }
        
        
        const hashed = await bcrypt.hash(password, 10);
        const user = new User({
            email, number, password: hashed, name, surname, patronymic, sex, address:{registrationAddress, mainAddress}, member
        });
        
        await user.save();
    
        res.status(201).json({massage: 'Пользователь успешно создан'});
    } catch (e){
        res.status(400).json({massage: 'Произошла неизвестная ошибка...', e});
    }
});



router.post('/login', async (req, res) => {
    try{
        const {login, password} = req.body;
        
        const user = await User.findOne({$or:[{email: login}, {number: login}]});

        if(!user){
            return res.status(400).json({massage: 'Некоректные данные пользователя'});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).json({massage: 'Некоректные данные пользователя'});
        }

        const token = jwt.sign({userId: user._id}, config.SECRET_KEY, {expiresIn: '2h'});
        
        res.status(200).json({massage: 'Вход выполнен успешно', token});

    } catch (e) {
        res.status(400).json({massage: 'Произошла неизыестная ошибка...'});
    }
});

module.exports = router;