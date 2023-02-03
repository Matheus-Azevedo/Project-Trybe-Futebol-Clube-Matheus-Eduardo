import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { mockTeams, mockTeam } from './mocks/teams.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('2.Testes para endpoint /teams', () => {
  describe('quando solicitado todos os times', () => {
    it('deve retornar um status 200 com todos os times', async () => {
      const httpResponse = await chai
        .request(app)
        .get('/teams')
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.deep.equal(mockTeams)
    });
  });
  describe('quando solicitado um time', () => {
    it('deve retornar um status 200 com time pelo id', async () => {
      const httpResponse = await chai
        .request(app)
        .get('/teams/1')
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.deep.equal(mockTeam)
    });
  });
});
