import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/tokens', async (req, res) => {
  try {
    const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': 'a56cc075-79c2-4288-8593-94e897e822d3',
        'Accept': 'application/json',
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching from CMC:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});


