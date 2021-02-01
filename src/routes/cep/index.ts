import { Router } from "express";
import { cepQuery, saveCep } from "../../controllers/CepController";

const cepRouter = Router();

cepRouter.get("/cep/:cep", cepQuery);
cepRouter.put("/cep/save", saveCep);

export default cepRouter;