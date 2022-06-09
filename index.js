const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const connectDB = require('./db');
const router = require('./routes');
const errorRouter = require('./routes/errorRouter');
const populateTeamsByPlayersIds = require('./helpers/populateTeamsByPlayersIds');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', router);
app.use('/', errorRouter);

app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, 'public/index.html'));
});

const start = async () => {
  try {
    await connectDB('DB was connected');
    await populateTeamsByPlayersIds();

    app.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
