const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const { sendBasicEmail } = require('./services/email-service');
const cron = require('node-cron');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.listen(PORT, () => {
        console.log("Server successfully started at PORT: ", PORT);

        sendBasicEmail(
            '"Support" <support@admin.com>',
            'b210055@nitsikkim.ac.in',
            'This is a testing email',
            'We hope that you will love our service'
        );

        cron.schedule('*/2 * * * *',() => {
            console.log('running a task every two minutes');
        })

    });
}

setupAndStartServer();
