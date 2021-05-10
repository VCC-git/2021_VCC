const getConnection = require('../../models');

exports.get_work = (req, res) => {
    getConnection((connection) => {
        connection.query(`select work_id, title, description, image_file from work where access=true;`, function(err, rows) {
            if(err) {
                console.log({message: 'work is exist so insert failed'});
                res.status(404).send({message: 'work is exist so insert failed'});
            } else {
                console.log({message: 'insert success'});
                res.status(200).send({rows});
            }
        })

        connection.release();
    });
}

exports.get_workContent = (req, res) => {
    getConnection((connection) => {
        connection.query(`select work_id, title, description, image_file, user_id, date from work where work_id = ${req.params.id} and access=true;`, function(err, rows) {
            if(err) {
                console.log({message: 'work is empty'});
                res.status(404).send({message: 'work is empty'});
            } else {
                if(rows[0] === undefined) {
                    console.log({message: 'work is undefined'});
                    res.status(404).send({message: 'work is undefined'});
                } else {
                    console.log({message: 'work is filled'});
                    res.status(200).send(rows[0]);
                }
            }
        })

        connection.release();
    });
}

exports.post_workEdit = (req, res) => {
    getConnection((connection) => {
        if (!req.files)
            return res.status(400).send('No files were uploaded.');
            
        if(req.body.title === '' || req.body.description === '') 
            return res.status(401).send('No Data were undefied'); 
            
        var file = req.files.photo;
        var img_name=file.name;

        file.mv('./server/images/'+img_name, function(err) {
            if (err)
                return res.status(500).send(err);

            const regex = /\s/gm;
            const sample_name = img_name.replace(regex, '%20');

            console.log(sample_name);

            const date = new Date().toISOString();

            connection.query(`update work set title='${req.body.title}', description='${req.body.description}', image_file='http://10.156.145.178:8080/images/${sample_name}', date='${date.slice(0,10)}', access=false where work_id=${req.params.id};`, function(err, rows) {
                if(err) {
                    console.log(err);
                    console.log({message: 'work is exist so update failed'});
                    res.status(404).send({message: 'work is exist so update failed'});
                } else {
                    console.log({message: 'update success'});
                    res.status(200).send({message: 'update success'});
                }
            })

            connection.release();
        })
    })
}

exports.post_workCreate = (req, res) => {

    getConnection((connection) => {
        if (!req.files)
            return res.status(400).send('No files were uploaded.');
            
        if(req.body.title === '' || req.body.description === '') 
            return res.status(401).send('No Data were undefied'); 
            
        var file = req.files.photo;
        var img_name=file.name;

        file.mv('./server/images/'+img_name, function(err) {
            if (err)
                return res.status(500).send(err);

            const regex = /\s/gm;
            const sample_name = img_name.replace(regex, '%20');

            const date = new Date().toISOString();

            connection.query(`insert ignore into work (title, description, image_file, user_id, date, access) values('${req.body.title}', '${req.body.description}' , 'http://10.156.145.178:8080/images/${sample_name}', '${req.accessToken.id}', '${date.slice(0,10)}', false);`, function(err, rows) {
                if(err) {
                    console.log({message: 'work is exist so insert failed'});
                    res.status(404).send({message: 'work is exist so insert failed'});
                } else {
                    console.log({message: 'insert success'});
                    res.status(200).send({message: 'insert success'});
                }
            })

            connection.release();
        })
    })
}

exports.post_workDelete = (req, res) => {
    getConnection((connection) => {

        connection.query(`delete from work where work_id = ${req.params.id}`, function(err, rows) {
            if(err) {
                console.log({message: 'work delete failed'});
                res.status(404).send({message: 'work delete failed'});
            } else {
                console.log({message: 'delete success'});
                res.status(200).send({message: 'delete success'});
            }
        })

        connection.release();
    })
}