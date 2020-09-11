import Incident from '../models/Incident';
import Ong from '../models/Ong';

class ProfileController {
  async index(req, res) {
    const { ongId: ong_id } = req;
    const { page = 1 } = req.query;

    const { count, rows } = await Incident.findAndCountAll({
      where: { ong_id },
      order: ['id'],
      limit: 5,
      offset: (page - 1) * 5,
      attributes: ['id', 'title', 'description', 'value'],
      include: [
        {
          model: Ong,
          as: 'ong',
          attributes: ['id', 'name', 'email', 'whatsapp', 'city', 'uf'],
        },
      ],
    });

    res.header('X-Total-Count', count);

    return res.json(rows);
  }
}

export default new ProfileController();
