import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useContexto } from "../../context.js";
import icons from "../../styles/icons.js";
import "./home.css";

let dados = [
  { id: 1, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-carro.png", categoria: "Carro", descricao: "Pagamento IPVA", valor: 2500 },
  { id: 2, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-casa.png", categoria: "Casa", descricao: "Condomínio", valor: 620 },
  { id: 3, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-lazer.png", categoria: "Lazer", descricao: "Sorvete no parque", valor: 17.50 },
  { id: 4, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", categoria: "Mercado", descricao: "Compras Walmart", valor: 375 },
  { id: 5, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-treinamento.png", categoria: "Educação", descricao: "Faculdade", valor: 490 },
  { id: 6, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", categoria: "Viagem", descricao: "Passagem Aérea", valor: 610 },
  { id: 7, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", categoria: "Mercado", descricao: "Compras Churrasco", valor: 144.30 },
  { id: 8, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", categoria: "Viagem", descricao: "Hotel", valor: 330 }
];


export default function Home() {
  const [despesas, setDespesas] = useState([]);
  const { busca, setVtotal, setShowBusca } = useContexto();

  const navigate = useNavigate();

  function deleteDespesa(id) {
    alert(id);
  }
  
  function RenderDespesa({despesa}) {
    return (
      <tr>
        <td>{despesa.id.toString().padStart(5,'0')}</td>
        <td>{despesa.descricao}</td>
        <td>{despesa.categoria}</td>
        <td className="text-right">
          {
            despesa.valor.toLocaleString("pt-BR", {
              minimumFractionDigits: 2
            })
          }
        </td>
        
        <td className="text-right">
          <button 
            className="btn btn-blue" 
            onClick={() => navigate(`/despesa/${despesa.id}`)}
          >
            <img src={icons.edit} alt="Alterar" className="icon-sm" />
          </button>
          
          <button className="btn btn-red ml-10" onClick={() => deleteDespesa(despesa.id)}>
            <img src={icons.remove} alt="Excluir" className="icon-sm" />
          </button>
        </td>
      </tr>          
    )
  }

  function listarDespesas(busca) {
    let data = dados;

    if (busca) {
      data = dados.filter((desp) => 
        desp.descricao.toUpperCase().includes(busca.toUpperCase())
      );
    }

    setDespesas(data);
    setVtotal(data.reduce((acc, item) => acc + item.valor, 0));
  }

  useEffect(() => {
    setShowBusca(true);
    listarDespesas(busca);
  }, [busca])
  
   
  return (
    <div className="container-home">
      <div className="title-home">
        <h1>Despesas</h1>
        <button className="btn btn-green" onClick={() => navigate("/despesa/add")}>
          Adicionar Despesa
        </button>
      </div>
      <div className="box-despesa">
        <table>
          <thead>
            <tr>
              <th>ID Despesa</th>
              <th>Descrição</th>
              <th>Categoria</th>
              <th className="text-right">Valor R$</th>
            </tr>
          </thead>
          <tbody>
            {
              despesas.map((despesa) => 
                <RenderDespesa despesa={despesa} key={despesa.id} />
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}