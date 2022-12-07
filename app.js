const express = require('express');
const app = express();
const port = 3000;

// надо будет заменить на dist/
app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => console.log(`App listening to port ${port}. Go to http://localhost:${port}/index.html`));
