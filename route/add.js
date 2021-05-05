const Router = require('express');
const Doctor = require('./../models/doctor');
const router = Router();

router.get('/', (req, res) => {
    res.render('doctorAdd');
});

router.post('/', async (req, res) => {
    const doctor = new Doctor({...req.body, records: []});

    await doctor.save();
    res.redirect('/');
});

module.exports = router;