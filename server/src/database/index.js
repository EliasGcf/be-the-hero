import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Ong from '../app/models/Ong';
import Incident from '../app/models/Incident';

const models = [Ong, Incident];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
