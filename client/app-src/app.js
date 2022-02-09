import {NegociacaoController} from './controllers/NegociacaoController.js';
import { Negociacao } from './domain/index.js';
const controller = new NegociacaoController();

const negociacao = new Negociacao(new Date(), 1, 20);
const headers = new Headers();
headers.set('Content-Type','application/json');

const method = 'POST';
const config = {
    method,
    headers
};

fetch('/negociacoes', config).then(()=> console.log('Dado enviado'));
