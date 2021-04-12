import { Router } from 'express';
import {routes, initialize } from './dummy/route.bootstrap';
const router = Router();

export class BaseRouter{
 constructor(){
   this.coreRoutes = routes(router) || {};

 }

 init(){
   initialize(this.coreRoutes)
   //initializePgRoutes(this.postgresRoutes)
 }

 getRouter(){
   return router;
 }


}
