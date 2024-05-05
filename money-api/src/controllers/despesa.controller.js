import prismaClient from "../database/prismaClient.js";

const listarDespesas = async (req, res) => {
	const despesas = await prismaClient.despesa.findMany();
	return res.json(despesas);
}

const inserirDespesas = async (req, res) => {
	const { descricao, categoria, valor } = req.body;

	if (!descricao || !categoria || !valor) {
		res.status(400).send("Informe a descrição e a categoria");
	}

	try {
		const despesa = await prismaClient.despesa.create({
			data: {
				descricao,
				categoria, 
				valor
			}
		})

		res.status(201).send("Despesa incluída com sucesso.");
	}
	catch (err) {
		res.status(400).send("Erro ao incluir a despesa: "+ err);
	}
}

const editarDespesas = async (req, res) => {
	const { descricao, categoria, valor } = req.body;
	const { id } = req.params;

	if (!descricao || !categoria || !valor) {
		res.status(400).send("Informe a descrição e a categoria");
	}

	try {
		const despesa = await prismaClient.despesa.update({
			where: {
				id: Number(id)
			},
			data: {
				descricao,
				categoria, 
				valor
			}
		})

		res.status(200).send("Despesa incluída com sucesso.");
	}
	catch (err) {
		res.status(400).send("Erro ao alterar a despesa: "+ err);
	}
}

const excluirDespesas = async (req, res) => {
	const { id } = req.params;

	try {
		await prismaClient.despesa.delete({
			where: {
				id: Number(id)
			}
		})

		res.status(200).send("Despesa excluída com sucesso.");
	}
	catch (err) {
		res.status(400).send("Erro ao excluir a despesa: "+ err);
	}
}

export default { listarDespesas, inserirDespesas, editarDespesas, excluirDespesas };
