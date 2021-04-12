import dotenv from 'dotenv';
dotenv.config();
import express , { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { BaseRouter } from '../routes/base.routes';

import { DummyController } from '../controllers/dummy/dummy.controller';
import { verifyToken, verifyAdminToken, Validator } from '../middlewares/dummy/dummy.middleware';

//for video confrencing
import { Server } from 'http';
import io from 'socket.io';
import path from 'path';

export class App{
  constructor(){
    this.express = express();
    //meant for asyn chat
    this.server = Server(this.express);
    this.io = io(this.server);
    this.path = path;

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

    //for build and deploy process to laod files
    // this.express.use('/static', express.static('public'));
    //
    // this.express.get('/**', (req, res) => {
    //     return res.sendfile(path.join(__dirname + '/public/index.html'));
    // });


    //ADDS THE SOCKET connect
    this.io.on('connection', socket => {
          socket.on('join-room', (roomId, userId) => {
              socket.join(roomId);
              socket.to(roomId).broadcast.emit('user-connected', userId);
              socket.on('disconnect', () => {
                  socket.to(roomId).broadcast.emit('user-disconnected', userId);
              })
          });
      })

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
    //without socket io chat
    // this.express.listen(this.port,()=>{
    //   console.log("Turring api service for node js on port:"+ this.port)
    // })

    //for socket
    this.server.listen(this.port,()=>{
       console.log("Turring api service for node js on port:"+ this.port)
     })
  }
}
