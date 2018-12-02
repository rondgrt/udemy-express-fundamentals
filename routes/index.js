const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from Routers Folder');
})

router.get('/home', (req, res) => {
    res.render('home', null);
})

router.get('/json', (req, res) => {
    const data = {
       greeting: 'hello!!' 
    }
    
    res.json(data);
});

module.exports = router;
