import Ong from '../models/Ong';
// import Incident from '../models/Incident';

class OngController {
  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const { id } = await Ong.create({ name, email, whatsapp, city, uf });

    return res.json({ id });
  }

  async index(req, res) {
    const ongs = await Ong.findAll({
      order: ['id'],
      attributes: ['id', 'name', 'email', 'whatsapp', 'city', 'uf'],
    });

    /* const ongs = await Ong.findAll({
      attributes: ['name', 'email', 'whatsapp', 'city', 'uf'],
      include: [
        {
          model: Incident,
          as: 'ong',
          attributes: ['id', 'title', 'description', 'value'],
        },
      ],
    }); */

    return res.json(ongs);
  }
}

export default new OngController();
