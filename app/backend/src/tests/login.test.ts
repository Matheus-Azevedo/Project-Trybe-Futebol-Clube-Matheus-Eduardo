import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('1.Testes para endpoint /login', () => {
  describe('quando o email não é informado', () => {
    it('deve retornar um status 400 e a mensagem "All fields must be filled"', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: '', password:  'secret_admin'});
      expect(httpResponse.status).to.equal(400)
      expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' })
    });
  });
  describe('quando a senha não é informada', () => {
    it('deve retornar um status 400 e a mensagem "All fields must be filled"', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'admin@admin.com', password:  ''});
      expect(httpResponse.status).to.equal(400)
      expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' })
    });
  });
  describe('quando o acesso não é encontrado', () => {
    it('deve retornar um status 400 e a mensagem "Incorrect email or password"', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'naoeoadmin@admin.com', password:  'nao_e_o_secret_admin'});
      expect(httpResponse.status).to.equal(401)
      expect(httpResponse.body).to.deep.equal({ message: 'Incorrect email or password' })
    });
  });
  describe('quando o acesso está correto', () => {
    it('deve retornar um status 200 e uma propriedade chamada token', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'admin@admin.com', password:  'secret_admin'});
      expect(httpResponse.status).to.equal(200)
      expect(httpResponse.body).to.have.property('token')
    });
  });
});
