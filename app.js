const express = require("express")
const routes = require('./routes/router');
const cors = require('cors');
const app = express()
//middleware
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
app.use(cors(corsOptions));
app.use(express.json());
// routes
app.use('/', routes);
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
});