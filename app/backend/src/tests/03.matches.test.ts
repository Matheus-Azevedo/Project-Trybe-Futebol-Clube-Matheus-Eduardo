import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { mockMatches, mockMatchesByProgress, mockMatchesByTeam } from './mocks/matches.mock';
import { send } from 'process';

chai.use(chaiHttp);

const { expect } = chai;

describe('3.Testes para endpoint /matches', () => {
  describe('quando solicitado todas as partidas', () => {
    it('deve retornar um status 200 com todas as partidas', async () => {
      const httpResponse = await chai
        .request(app)
        .get('/matches')
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.deep.equal(mockMatches)
    });
  });
  describe('quando solicitado todas as matches pelo status inProgress', () => {
    it('deve retornar um status 200 e a matches correspondentes ', async () => {
      const httpResponse = await chai
        .request(app)
        .get('/matches?inProgress=true')
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.deep.equal(mockMatchesByProgress)
    });
  });
  describe('quando solicitado todas as matches do team pelo seu id e status inProgress', () => {
    it('deve retornar um status 200 e a matches por team ', async () => {
      const httpResponse = await chai
        .request(app)
        .get('/matches/1')
        .send({ inProgress: false })
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.deep.equal(mockMatchesByTeam)
    });
  });
});