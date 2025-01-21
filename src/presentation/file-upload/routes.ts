import { Router } from 'express';
import { FileUploadService } from '../services';
import { FileUploadController } from './controller';
import { FileUploadMiddleware, TypeMiddleware } from '../middlewares';





export class FileUploadRoutes {


  static get routes(): Router {

    const router = Router();
    const fileUploadService = new FileUploadService();
    const controller = new FileUploadController(fileUploadService);
    
    // Definir las rutas
    router.use(FileUploadMiddleware.containFiles);
    router.use(TypeMiddleware.validTypes(['users', 'products', 'categories']));
    router.post('/single/:type',  controller.uploadFile);
    router.post('/multiple/:type', controller.uploadMultipleFiles);



    return router;
  }


}

