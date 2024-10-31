const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

let cards = [
    { id: 1, text: 'text A', color: '#F2B2BB' },
    { id: 2, text: 'text B', color: '#A9CCE3' },
    { id: 3, text: 'text C', color: '#F2E394' },
    { id: 4, text: 'text D', color: '#A8E4A0' },
    { id: 5, text: 'text E', color: '#DDA0DD' }
]
//READ
app.get('/cards', (req, res) => {
    res.json(cards);
});

//CREATE
app.post('/cards', (req, res) => {
    const newCard = {
        id: cards.length + 1,
        text: req.body.text,
        color: req.body.color,
    };
    cards.push(newCard);
    res.json(cards);
});

//UPDATE
app.put('/cards/:id', (req, res) => {
    console.log('oiuyt');
    const card = cards.find(b => b.id === parseInt(req.params.id))
    if (card) {
        card.text = req.body.text;
        card.color = req.body.color;
        console.log(cards);
        res.json(cards);
    }
    else
        res.status(404).json({ message: 'update: Book not found' })
});

//DELETE
app.delete('/cards/:id', (req, res) => {
    cards = cards.filter(card => card.id !== parseInt(req.params.id));
    res.json(cards);
});


app.listen(port, () => {
    console.log(`Server run on http://localhost:${port}...`)
})