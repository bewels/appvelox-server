const Router = require('express');
const Record = require('./../models/record');
const router = Router();
const auth = require('./../middleware/auth.middleware');



router.get('/getrecords', auth, async (req, res) => {
    try{
        const userId = req.body.user.userId;

        const records = await Record.find({userId}).populate('doctorId');

        res.status(200).json(records);

    } catch (e) {
        res.status(400).json({massage: 'Произошла неизвестная ошибка...'});
    }
});

router.post('/createrecord', auth, async (req, res) => {
    try{
        const {doctorId, date} = req.body;
        const userId = req.body.user.userId;

        const record = await Record.findOne({$and:[{doctorId}, {userId}]});
        
        if(record) {
            return res.status(400).json({massage: 'Запись уже существует'});
        }

        const newRecord = new Record({doctorId, userId, date});

        await newRecord.save();

        res.status(201).json({massage: `Запись создана на дату: ${date}`});
    } catch (e) {
        res.status(400).json({massage: 'Произошла неизвестная ошибка' + e});
    }
});

router.delete('/deleterecord', auth, async (req, res) => {
    try{
        const {recordId} = req.body;

        await Record.findByIdAndDelete({_id: recordId})

        res.status(200)
    } catch (e) {
        res.status(400).json({massage: 'Что-то пошло не так...' + e})
    }

})

module.exports = router;