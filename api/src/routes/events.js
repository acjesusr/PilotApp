const router = require('express').Router();
let Event = require('../services/event.model')

router.route('/').get((req,res) => {
    Event.find().then(
        users => res.json(users)
    ).catch(
        err => res.status(400).json('Error: ' + err)
    );
});

router.route('/add').post((req,res) =>{
    const name = req.body.name;
    const professor = req.body.professor;
    const description = req.body.description;
    const attendance = req.body.attendance;
    const date = req.body.date;

    const newEvent = new Event({name,professor,description,attendance,date});
    newEvent.save().then(
        () => res.json('Event Added!')
    ).catch(
        err => res.status(400).json('Error: ' + err)
    );
});

module.exports = router;