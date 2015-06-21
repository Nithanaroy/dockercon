var Project = require('../models/project.js');

exports.findByUser = function(req, res) {
    // Hard coding req.user. This should be injected into request using
    // a middleware that authenticate the logged in user.
    req.user = {
        id: 1
    };

    Project.find({
        userId: req.user.id
    }, function(err, data) {
        if (err) {
            res.send(500, err);
        } else {
            res.json(data);
        }
    });
};

exports.getAll = function(req, res) {
    data = [
        ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
        ['CAN', new Date(1789, 3, 29), 1.67, 'North America', 33739900],
        ['DEU', new Date(1780, 3, 29), 1.36, 'Europe', 81902307],
        ['DNK', new Date(1767, 3, 29), 1.84, 'Europe', 5523095],
        ['EGY', new Date(1745, 3, 29), 2.78, 'Middle East', 79716203],
        ['GBR', new Date(1789, 3, 29), 2, 'Europe', 61801570],
        ['IRN', new Date(1754, 3, 29), 1.7, 'Middle East', 73137148],
        ['IRQ', new Date(1789, 3, 29), 4.77, 'Middle East', 31090763],
        ['ISR', new Date(1723, 3, 29), 2.96, 'Middle East', 7485600],
        ['RUS', new Date(1789, 3, 29), 1.54, 'Europe', 141850000],
        ['USA', new Date(1767, 3, 29), 2.05, 'North America', 307007000]
    ]
    res.json(data);
};