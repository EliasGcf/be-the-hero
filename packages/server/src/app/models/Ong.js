import Sequelize, { Model } from 'sequelize';
import generateUniqueId from '../../utils/generateUniqueId';

class Ong extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (ong) => {
      ong.id = generateUniqueId();
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Incident, { foreignKey: 'ong_id', as: 'ong' });
  }
}

export default Ong;
