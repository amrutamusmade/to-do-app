const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tasks = [];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { tasks });
});

app.post('/tasks', (req, res) => {
    const { task } = req.body;
    tasks.push(task);
    res.redirect('/');
});

app.post('/tasks/delete/:id', (req, res) => {
    const { id } = req.params;
    tasks.splice(id, 1);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
