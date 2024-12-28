const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: '../.env' }); // Убедитесь, что путь правильный
const app = express();
const router = express.Router();
const connectDB = require('./db');

app.use(cors());
app.use(express.json());

app.use('/', router);

router.post('/events', async (req, res) => {
    try {
        const newUser = req.body;
        const clientDB = await connectDB();
        const db = clientDB.db('events');
        const result = await db.collection('people').insertOne(newUser);

        res.json({
            success: true,
            newUser,
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
