import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './repositories/use-cases/submit-feedback-use-case';

export const routes = express.Router();

/*
  GET = Buscar informações
  POST = Cadastrar informações
  PUT = Atualizar informações de uma entidade
  PATCH = Atualizar um informação única de uma entidade
  DELETE = Deletar uma informação
*/ 

routes.get('/users', (req, res) => {
  return res.send('Hello Word');
});

routes.post('/feedbacks', async (req, res) => {
  //console.log(req.body)
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository(); 
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send();
  
});
