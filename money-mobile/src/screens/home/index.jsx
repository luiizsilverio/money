import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import icons from "../../constants/icons.js";
import { styles } from "./home.style.js";
import Despesa from '../../components/despesa.jsx';

const dados = [
  {
    id: 1, 
    icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-carro.png", 
    categoria: "Carro", 
    descricao: "Pagamento IPVA", 
    valor: 2500
  },
  {
    id: 2, 
    icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-casa.png", 
    categoria: "Casa", 
    descricao: "Condomínio", 
    valor: 620
  },
  {
    id: 3, 
    icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-lazer.png", 
    categoria: "Lazer", 
    descricao: "Sorvete no parque", 
    valor: 17.50
  },
  {
    id: 4, 
    icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", 
    categoria: "Mercado", 
    descricao: "Compras Walmart", 
    valor: 375
  },
  {
    id: 5, 
    icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-treinamento.png", 
    categoria: "Educação", 
    descricao: "Faculdade", 
    valor: 490
  },
  {
    id: 6, 
    icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", 
    categoria: "Viagem", 
    descricao: "Passagem Aérea", 
    valor: 610
  },
  {
    id: 7, 
    icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", 
    categoria: "Mercado", 
    descricao: "Compras Churrasco ", 
    valor: 144.30
  },
  {
    id: 8, 
    icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", 
    categoria: "Viagem", 
    descricao: "Hotel", 
    valor: 330
  }
];

export default function Home(props) {
  const [total, setTotal] = useState(0);
  const [despesas, setDespesas] = useState([]);
  
  function openDespesa(id) {
    props.navigation.navigate("despesa");

  }

  function listarDespesas(props) {
    // Simular o acesso à API
    setDespesas(dados);
    setTotal(dados.reduce((acc, item) => acc + item.valor, 0));
  }

  useEffect(() => {
    listarDespesas();
  }, [])

  return (
    <View style={styles.container}>
      <Image source={icons.logo} style={styles.logo} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.total}>
            <Text style={styles.title}>
              R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </Text>
            <Text style={styles.subtitle}>Total de Gastos</Text>
          </View>
          <Image source={icons.money} style={styles.icon} />
        </View>

        <View style={styles.despesas}>
          <Text style={styles.despTitulo}>Despesas</Text>
          {
            despesas.map(data => (
              <Despesa key={data.id} data={data} onClick={openDespesa} />
            ))
          }
        </View>
      </ScrollView>

      <TouchableOpacity activeOpacity={0.7} onPress={() => openDespesa(0)}>
        <View style={styles.newButton}>
          <Text style={styles.textMais}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}