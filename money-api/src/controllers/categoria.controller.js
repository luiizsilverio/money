import prismaClient from "../database/prismaClient.js";

const listarCategorias = async (req, res) => {
	const categories = await prismaClient.categoria.findMany();
	return res.json(categories);
}

const inserirCategorias = (req, res) => {
	res.send("Inserir Categorias");
}

const editarCategorias = (req, res) => {
	res.send("Editar Categorias");
}

const excluirCategorias = (req, res) => {
	res.send("Excluir Categorias");
}

export default { listarCategorias, inserirCategorias, editarCategorias, excluirCategorias };
