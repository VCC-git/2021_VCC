const getConnection = require('../../models');

exports.get_auto = (req, res) => {
    getConnection((connection) => {
        connection.query(`select status from think where name='auto';`, function(err, rows) {
            if(err) {
                console.log({message: 'test failed'});
            } else {
                console.log({message: 'test success', rows});
                return rows[0];
            }
        })

        connection.release();
    })
}

exports.put_auto = (req, res) => {
    getConnection((connection) => {
        connection.query(`update think set status=if(status=0, 1, 0) where name='auto';`, (err, rows) => {
            if(err) {
                console.log(({message: 'auto put failed'}));
                res.status(404).send({message: 'auto put failed'});
            } else {
                console.log({message: 'auto put success'});
                res.status(200).send(rows[0]);
            }
        })
    })
}