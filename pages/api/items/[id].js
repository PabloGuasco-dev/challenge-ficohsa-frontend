import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/items/${req.query.id}`);

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
}