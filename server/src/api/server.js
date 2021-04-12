import dotenv from 'dotenv';
dotenv.config();
import express , { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { BaseRouter } from '../routes/base.routes';

import { DummyController } from '../controllers/dummy/dummy.controller';
import { verifyToken, verifyAdminToken, Validator } from '../middlewares/dummy/dummy.middleware';

export class App{
  constructor(){
    this.express = express();
    // this.express.use(cors());
    this.express.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      next();
    });

    this.express.use(helmet());
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({extended:false}))
    // this.express.disable('x-')
    this.appRouter = new BaseRouter();
    this.appRouter.init();

    this.routes = this.appRouter.getRouter();
    this.express.get('/', (request,response)=>{
      return response.status(200).json({
        status:200,
        message: "Live with turring senior software developer"
      })
    })
    this.port = process.env.PORT || 12000;
    // this.express.use('api/v1', this.routes)
    this.express.get('/api/v1/dummy-request',[verifyToken], DummyController.getAll);
    this.express.get('/api/v1/dummy-request/:id', [verifyToken], DummyController.getById);
    this.express.post('/api/v1/dummy-request', [ verifyToken,Validator.testAllValidation], DummyController.save);
    this.express.patch('/api/v1/dummy-request/:id/edit',  [verifyToken], DummyController.update);
    this.express.delete('/api/v1/dummy-request/:id/delete', [verifyToken], DummyController.delete);
    this.express.post('/api/v1/signin', [ Validator.validateLogin], DummyController.login);
    this.express.post('/api/v1/signup', [ Validator.preventDoubleSignup], DummyController.register);
  }

  run(){
    this.express.listen(this.port,()=>{
      console.log("Turring api service for node js on port:"+ this.port)
    })
  }
}
