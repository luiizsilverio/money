import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./cad-despesa.css";
import { useContexto } from "../../context";
import { api } from "../../services/api";

export default function CadDespesa() {
  const [valor, setValor] = useState("0");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("Lazer");
  const {setShowBusca} = useContexto();

  const navigate = useNavigate();
  const { id: idUrl } = useParams();

  async function SalvarDados() {
    try {
      if (idUrl > 0) {
        await api.put(`despesas/${idUrl}`, {
          descricao,
          categoria,
          valor
        });
      } else {
        await api.post('despesas', {
          descricao,
          categoria,
          valor
        });
      }
    }
    catch (error) {
      console.log(error.message);
      alert("Erro ao buscar os dados da despesa", error.message);
    }    
    navigate("/");
  }
  
  const getDadosDespesa = async (id) => {
    try {
      const response = await api.get(`despesas/${id}`);

      const { data } = response;
      setDescricao(data.descricao);
      setCategoria(data.categoria);
      setValor(data.valor.toString());
    }
    catch (error) {
      console.log(error.message);
      alert("Erro ao buscar os dados da despesa", error.message);
    }    
  }

  useEffect(() => {
    setShowBusca(false);

    if (idUrl !== "add") getDadosDespesa(idUrl);
  }, [])

  return (
    <div className="container-despesa-cad">
      <div className="box-despesa-cad">

        {
          idUrl == "add" ? <h1>Nova Despesa</h1> : <h1>Editar Despesa</h1>
        }

        <div className="input-group">
          <p>Valor</p>
          <input 
            type="text" 
            className="input-lg w100" 
            id="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)} 
          />
        </div>

        <div className="input-group">
          <p>Descricao</p>
          <input 
            type="text" 
            className="w100" 
            id="valor" 
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <div className="input-group">
          <p>Categoria</p>
          <select 
            id="categoria" 
            className="w100"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="Carro">Carro</option>
            <option value="Casa">Casa</option>
            <option value="Lazer">Lazer</option>
            <option value="Mercado">Mercado</option>
            <option value="Educação">Educação</option>
            <option value="Viagem">Viagem</option>                                        
          </select>
        </div>  

        <div className="btn-group text-right">
          <button 
            onClick={() => navigate("/")} 
            className="btn btn-blue-outline"
          >
            Cancelar
          </button>
          <button 
            onClick={SalvarDados} 
            className="btn btn-blue ml-20"
          >
            Salvar
          </button>
        </div>      
      </div>
    </div>
  )
}