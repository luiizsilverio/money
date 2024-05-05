import { Router } from 'express';
import ControllerDespesa from '../controllers/despesa.controller.js';
import ControllerCategorias from '../controllers/categoria.controller.js';

const routes = Router();

routes.get('/', (req, res) => {
	res.send("Money API 💰");
})

routes.get('/despesas',     ControllerDespesa.listarDespesas);
routes.post('/despesas', 	  ControllerDespesa.inserirDespesas);
routes.put('/despesas/:id', ControllerDespesa.editarDespesas);
routes.delete('/despesas/:id', ControllerDespesa.excluirDespesas);

routes.get('/categorias', 	  ControllerCategorias.listarCategorias);
routes.post('/categorias', 	  ControllerCategorias.inserirCategorias);
routes.put('/categorias/:id', ControllerCategorias.editarCategorias);
routes.delete('/categorias/:id', ControllerCategorias.excluirCategorias);

export default routes;
