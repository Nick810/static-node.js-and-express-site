const express = require('express');
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');
const errorHandlers = require('./routes/errorHandlers');
const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.use(mainRoutes);
app.use('/project', projectRoutes);

app.use(errorHandlers.handleFourOFour);
app.use(errorHandlers.handleGlobalError);

app.listen(3000, () => {
  console.log('This application is listening on localhost:3000');
});
