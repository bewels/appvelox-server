const Router = require('express');
const Doctor = require('./../models/doctor');
const router = Router();
const auth = require('./../middleware/auth.middleware');

router.get('/doctor', auth, async (req, res) => {
    try{
        const doctors = await Doctor.find();

        if(!doctors) {
            return res.status(404).json({massage: 'Not found'});
        }
    
        res.status(200).json(doctors);
    } catch (e) {
        return res.status(400).json({massage: 'Произошла неизвестная ощибка...'});
    }

});


module.exports = router;