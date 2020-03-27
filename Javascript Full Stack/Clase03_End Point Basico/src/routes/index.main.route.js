const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.send('Welcome to Main Page of Express Server');
});

module.exports = router;