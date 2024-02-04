import express from 'express';
import cors from 'cors';

// create express app
const app = express();

// enable cors
app.use(cors());

// set up the express app to handle data parsing
app.use(express.json());

// set up the default route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the AstroPedia API!' });
});

// set up the port that the server will run on
const PORT = process.env.PORT || 3000;

// listen for requests
app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port http://localhost:${PORT}`)
})