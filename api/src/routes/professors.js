const router = require('express').Router();
let Professor = require('../services/professor.model');

router.route('/').get((req,res) => {
    Professor.find().then(
        (users) => res.json(users)
    ).catch(
        err => res.status(400).json('Error: ' + err)
    );
});

router.route('/add').post((req,res) =>{
    const name = req.body.name;
    const email = req.body.email;

    const newProfessor = new Professor({name, email});
    newProfessor.save().then(
        () => res.json('Event Added!')
    ).catch(
        err => res.status(400).json('Error: ' + err)
    );
    /*const professor = req.body.professor;
    const description = req.body.description;
    const attendance = req.body.attendance;
    const date = Date.parse(req.body.date);

    const newProfessor = new Professor({name,professor,description,attendance,date});
    newProfessor.save().then(
        () => res.json('Event Added!')
    ).catch(
        err => res.status(400).json('Error: ' + err)
    );*/
});

module.exports = router;