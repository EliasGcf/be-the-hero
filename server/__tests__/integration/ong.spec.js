import request from 'supertest';

import truncate from '../utils/truncate';
import app from '../../src/app';

describe('Ong', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: 'APAD',
      email: 'contato@apad.com',
      whatsapp: '75988231405',
      city: 'Saj',
      uf: 'BA',
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
