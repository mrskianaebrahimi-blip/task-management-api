
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Task Management API is running!');
});

app.get('/api/tasks', (req, res) => {
    res.json([
        { id: 1, title: 'Learn Docker', completed: false },
        { id: 2, title: 'Build Node.js API', completed: true }
    ]);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
