const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const TicketController = require('./controllers/ticket-controller');
const jobs = require('./utils/job');

const { createChannel } = require('./utils/messageQueue');

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    // const channel = await createChannel();

    app.post('/api/v1/tickets',TicketController.create); 

    app.listen(PORT, () => {
        console.log("Server successfully started at PORT: ", PORT);
        jobs();
    });
}

setupAndStartServer();
