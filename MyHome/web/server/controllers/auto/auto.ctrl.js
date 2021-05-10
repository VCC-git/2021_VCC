const getConnection = require('../../models');

exports.get_test = (req, res) => {
    getConnection((connection) => {
        connection.query(`select * from think;`, function(err, rows) {
            if(err) {
                console.log({message: 'test failed'});
                res.status(404).send({message: 'test failed'});
            } else {
                console.log({message: 'test success'});
                res.status(200).send({rows});
            }
        })

        connection.release();
    })
}