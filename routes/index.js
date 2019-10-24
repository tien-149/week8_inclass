const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');

    let query = "SELECT ID, avatar, Name, Logo, JobTitle FROM tbl_card";


    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        // console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
        res.render('home', { people: result }); //we can change the key but we had to keep the result
    })
})

router.get('/:id', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');
    console.log(req.params.id); //1 2 3 or whatever comes after the slach

    let query = `select * from tbl_bio where profID="${req.params.id}"`;


    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
        res.render('home', { people: result }); //we can change the key but we had to keep the result
    })
})

module.exports = router;


//type show table => show 2 table;
// describe tablename
// Change the data for that table
//updata table_myadmin
