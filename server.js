const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

let invalidatedTokens = [];

app.get('/get-token', (req, res) => {
    const token = 'default-token';
    res.json({ token });
});

app.post('/logout', (req, res) => {
    const { token } = req.body;
    invalidatedTokens.push(token);
    res.json({ message: 'Logged out successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
