const express = require('express');
const app = express();
const PORT = 3000;

const cors = require('cors'); 
app.use(cors());


app.get('/', (req, res) => {
    res.json([
        {
            id: crypto.randomUUID(),
            name: 'Sample Item 1',
            price: 19.99
        },
        {
            id: crypto.randomUUID(),
            name: 'Sample Item 2',
            price: 29.99
        },
    ]);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});