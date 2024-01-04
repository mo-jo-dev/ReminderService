const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

// const { sendBasicEmail } = require('./services/email-service');
const TicketController = require('./controllers/ticket-controller');
const jobs = require('./utils/job');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.post('/api/v1/tickets',TicketController.create); 

    app.listen(PORT, () => {
        console.log("Server successfully started at PORT: ", PORT);
        jobs();
        // sendBasicEmail(
        //     '"Support" <support@admin.com>',
        //     'b210055@nitsikkim.ac.in',
        //     'This is a testing email',
        //     'We hope that you will love our service'
        // );

    });
}

setupAndStartServer();
