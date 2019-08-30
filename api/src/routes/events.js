const router = require('express').Router();
let Event = require('../services/event.model');

router.route('/').get((req,res) => {
    Event.find({professor:{email:req.body.email}}).then(
        events => res.json(events)
    ).catch(
        err => res.status(400).json('Error: ' + err)
    );
});

router.route('/:email').put((req,res) => {
    Event.find({professorEmail:req.params.email}).then(
        events => res.json(events)
    ).catch(
        err => res.status(400).json('Error: ' + err)
    );
});

router.route('/:id').delete((req,res) => {
    Event.find({professorEmail:req.params.email}).then(
        events => res.json(events)
    ).catch(
        err => res.status(400).json('Error: ' + err)
    );
});
router.route('/add').post((req,res) =>{
    const name = req.body.name;
    //const email = req.body.email;
    const professor = req.body.professor;

    const newEvent = new Event({name, email});
    newEvent.save().then(
        () => res.json('Event Added!')
    ).catch(
        err => res.status(400).json('Error: ' + err)
    );
    /*const Event = req.body.Event;
    const description = req.body.description;
    const attendance = req.body.attendance;
    const date = Date.parse(req.body.date);

    const newEvent = new Event({name,Event,description,attendance,date});
    newEvent.save().then(
        () => res.json('Event Added!')
    ).catch(
        err => res.status(400).json('Error: ' + err)
    );*/
});

module.exports = router;