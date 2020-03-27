import Ong from '../models/Ong';

class SessionController {
  async store(req, res) {
    const { id } = req.body;

    const ong = await Ong.findByPk(id, { attributes: ['name'] });

    if (!ong) {
      return res.status(400).json({ error: 'No ONG found with this ID' });
    }

    return res.json(ong);
  }
}

export default new SessionController();
