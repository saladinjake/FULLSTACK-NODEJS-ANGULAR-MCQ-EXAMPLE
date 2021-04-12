import { DummyController } from '../../controllers/dummy/dummy.controller';
import { verifyToken, verifyAdminToken, Validator } from '../../middlewares/dummy/dummy.middleware';

export class DummyRoutes{
   constructor(router){
     this.router = router
   }
   attachedRoutes(){
     
   }
}
