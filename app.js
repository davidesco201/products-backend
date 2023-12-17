const express = require("express")
const routes = require('./routes/router');
const app = express()
//middleware
app.use(express.json());
// routes
app.use('/', routes);
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
});