import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/items${req.query.q ? `?texto=${req.query.q}` : '?texto='}`);

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    
    if (error.response && error.response.status === 404) {
      res.status(404).json({ mensaje: 'No se encontraron resultados' });
    } else {
      res.status(500).json({ mensaje: 'Error en el servidor' });
    }
  }
}