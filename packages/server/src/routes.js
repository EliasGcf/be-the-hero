import { Router } from 'express';

import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

import validateOngStore from './app/validators/OngStore';
import validateIncidentIndex from './app/validators/IncidentIndex';
import validateIncidentStore from './app/validators/IncidentStore';
import validateIncidentDelete from './app/validators/IncidentDelete';
import validateProfileIndex from './app/validators/ProfileIndex';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngController.index);

routes.post('/ongs', validateOngStore, OngController.store);

routes.get('/incidents', validateIncidentIndex, IncidentController.index);

routes.use(authMiddleware); // Todas as rotas abaixo precisam enviar o ong_id pelo header como authorization

routes.post('/incidents', validateIncidentStore, IncidentController.store);

routes.delete(
  '/incidents/:id',
  validateIncidentDelete,
  IncidentController.delete
);

routes.get('/profile', validateProfileIndex, ProfileController.index);

export default routes;
