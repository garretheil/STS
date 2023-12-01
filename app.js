const express = require('express');
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const uri =
  'mongodb+srv://lsequx:r8aVNNu684Kp22OW@simpleticketsystem.hvn7mi8.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.use(bodyParser.urlencoded({ extended: true }));

async function run() {
  try {
    await client.connect();
    await client.db('simpleticketsystem').command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');

    // Create or ensure the existence of the "tickets" collection
    await client.db('tickets_db').createCollection('ticketData');
    console.log('Tickets collection created or already exists.');
  } finally {
    // Do not close the connection here to keep the connection open for the server to use.
  }
}

run().catch(console.dir);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/newTicket', (req, res) => {
  res.render('newTicket');
});

// Add the new route for register.ejs
app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/newTicket', async (req, res) => {
  try {
    const { requestType, ticketSubject, priority, requester, description } = req.body;
    await client.connect();
    const ticketsCollection = client.db('tickets_db').collection('ticketData');

    await ticketsCollection.insertOne({
      requestType,
      ticketSubject,
      priority,
      requester,
      description,
    });

    console.log('New ticket added to the database.');

    res.redirect('/');
  } catch (error) {
    console.error('Error adding new ticket:', error);
    res.status(500).send('Internal Server Error');
  } finally {
    // Do not close the connection here to keep the connection open for the server to use.
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
