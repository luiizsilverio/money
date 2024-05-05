import { useEffect, useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native'

import { styles } from "./cadastro.style";
import icons from "../../constants/icons";
import theme from "../../constants/theme";
import { api } from "../../services/api";

export default function Cadastro(props) {
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  const route = useRoute();
	const { id } = route.params;

  function handleSalvar() {
    
    props.navigation.goBack();
  }

  function handleExcluir() {

    props.navigation.goBack();
  }

  useEffect(() => {
    async function buscaDespesa() {
      try {
        const response = await api.get(`despesas/${id}`);
  
        setDescricao(response.data.descricao);
        setCategoria(response.data.categoria);
        setValor(response.data.valor.toString());
      }
      catch (error) {
        console.log(error.message);
        Alert.alert("Erro ao buscar os dados da despesa");
      }    
    }

    props.navigation.setOptions({
      title: id > 0 ? 'Alterar Despesa' : 'Nova Despesa'
    })

    buscaDespesa();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Valor</Text>
        <TextInput 
          placeholder="0,00" 
          style={styles.inputValor} 
          value={valor}
          // defaultValue={valor.toFixed(2)} 
          keyboardType="decimal-pad" 
        />
      </View>

      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Descrição</Text>
        <TextInput 
          placeholder="Ex: Aluguel" 
          style={styles.inputText} 
          value={descricao}
          // defaultValue={descricao} 
        />
      </View>

      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Categoria</Text>
        <View style={styles.inputPicker}>
          <Picker
            selectedValue={categoria}
            dropdownIconColor={theme.COLORS.medium_gray}
            onValueChange={(itemValue, itemIndex) =>setCategoria(itemValue)}
          >
            <Picker.Item label="Carro" value="Carro" />
            <Picker.Item label="Casa" value="Casa" />
            <Picker.Item label="Lazer" value="Lazer" />
            <Picker.Item label="Mercado" value="Mercado" itemStyle={{ padding: 0 }} />
            <Picker.Item label="Educação" value="Educação" />
            <Picker.Item label="Viagem" value="Viagem" />
          </Picker>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity 
          activeOpacity={0.7} 
          style={styles.btnExcluir}
          onPress={handleExcluir}
        >
          <Image source={icons.remove} style={styles.btnDelete} />
        </TouchableOpacity>


        <TouchableOpacity 
          activeOpacity={0.7} 
          style={styles.btnSalvar}
          onPress={handleSalvar}
        >
          <Text style={styles.btnTexto}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}