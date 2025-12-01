
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/images', async (req, res) => {
  try {

    const page = req.query.page || 1;
    const limit = req.query.limit || 12;

    const response = await axios.get('https://picsum.photos/v2/list', {
      params: { page, limit }
    });

    const images = response.data.map(item => ({
      id: item.id,
      author: item.author,
      width: item.width,
      height: item.height,
      thumbnail: `https://picsum.photos/id/${item.id}/400/300`, 
      original: item.download_url
    }));

    res.json({ ok: true, page: Number(page), limit: Number(limit), images });
  } catch (err) {
    console.error('Error fetching images:', err.message || err);
    res.status(500).json({ ok: false, error: 'No se pudieron obtener las imágenes' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
