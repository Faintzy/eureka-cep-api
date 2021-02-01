import { Request, Response, Router } from 'express';
import cepRouter from '../routes/cep/index';

const routes = Router();

routes.use(cepRouter);

export default routes;