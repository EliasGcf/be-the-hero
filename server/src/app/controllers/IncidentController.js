import Incident from '../models/Incident';
import Ong from '../models/Ong';

class IncidentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const { count, rows } = await Incident.findAndCountAll({
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

  async store(req, res) {
    const { title, description, value } = req.body;
    const { ongId: ong_id } = req;

    const { id } = await Incident.create({
      ong_id,
      title,
      description,
      value,
    });

    return res.json({ id });
  }

  async delete(req, res) {
    const { id } = req.params;
    const { ongId: ong_id } = req;

    const incident = await Incident.findOne({ where: { id, ong_id } });

    if (!incident) {
      return res.status(400).json({ error: 'Incident not found' });
    }

    await incident.destroy();

    return res.status(204).json({});
  }
}

export default new IncidentController();
