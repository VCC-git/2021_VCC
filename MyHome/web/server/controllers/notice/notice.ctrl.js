const getConnection = require('../../models');

exports.get_notice = ( _ , res ) => {

    getConnection((connection) => {

        connection.query(`select notice_id, title, date from notice;`, function(err, rows) {
            if(err) {
                console.log({message: 'notice is empty'});
                res.status(404).send({message: 'notice is empty'});
            } else {
                console.log({message: 'notice is filled'});
                console.log(rows);
                res.status(200).send(rows);
            }
        })

        connection.release();
    })

}

exports.get_noticeContent = ( req , res) => {

    getConnection((connection) => {

        connection.query(`select notice_id, title, date, description from notice where notice_id = ${req.params.id};`, function(err, rows) {
            if(err) {
                console.log({message: 'notice is empty'});
                res.status(404).send({message: 'notice is empty'});
            } else {
                if(rows[0] === undefined) {
                    console.log({message: 'notice is undefined'});
                    res.status(404).send({message: 'notice is undefined'});
                } else {
                    console.log({message: 'notice is filled'});
                    console.log(rows[0]);
                    res.status(200).send(rows[0]);
                }
            }
        })

        connection.release();
    })

}