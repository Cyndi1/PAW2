const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
    // format data JSON
    const data = {
        caption : "Mahasiswa",
        layout : "layouts/main-layout",
        data : [
            {
                npm : "2226240125",
                nama : "Cyndi Claudia Wang",
            },
            {
                npm : "2226240090",
                nama : "Jessica Valencia",
            },
            {
                npm : "2226240061",
                nama : "Fiolin Meldy Graciella",
            },
        
        ]

    };
    res.render('index', data);
    // menuju ke views/index.ejs
});

module.exports = router;   
