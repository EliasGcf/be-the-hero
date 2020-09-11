import Ong from '../models/Ong';

export default async (req, res, next) => {
  const ongId = req.headers.authorization;

  if (!ongId) {
    return res.status(401).json({ error: 'ONG ID not provided' });
  }

  const ong = await Ong.findByPk(ongId /* , { attributes: ['id'] } */);

  if (!ong) {
    return res.status(401).json({ error: 'ONG ID is invalid' });
  }

  req.ongId = ongId;
  return next();
};
