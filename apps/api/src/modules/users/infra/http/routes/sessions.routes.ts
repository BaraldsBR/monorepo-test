import { Router } from 'express';

import SessionsController from '../controller/SessionsController';

const sessionsRouter = Router();

const sessionsController = new SessionsController();
sessionsRouter.post('/login', sessionsController.create);

export default sessionsRouter;
