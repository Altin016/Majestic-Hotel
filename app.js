const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use('/static', express.static('static'))

app.get('/', (req, res) => {
    res.render('Home.ejs')
});

app.get('/room', (req, res) => {
    res.render('Room.ejs')
});

app.get('/contact', (req, res) => {
    res.render('Contact.ejs')
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});