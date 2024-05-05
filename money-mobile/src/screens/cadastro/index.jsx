import { useEffect, useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native'

import { styles } from "./cadastro.style";
import icons from "../../constants/icons";
import theme from "../../constants/theme";
import { api } from "../../services/api";

export default function Cadastro(props) {
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("Lazer");

  const route = useRoute();
	const { id } = route.params;

  async function handleSalvar() {
    try {
      if (id > 0) {
        await api.put(`despesas/${id}`, {
          descricao,
          categoria,
          valor
        })
      } else {
        await api.post('despesas', {
          descricao,
          categoria,
          valor
        })
      }
    }
    catch (error) {
      console.log(error.message);
      Alert.alert("Erro ao gravar os dados da despesa", error.message);
    }
    finally {
      props.navigation.goBack();
    }    
  }

  function handleExcluir() {
    
    async function confirmaExclusao() {
      try {
        await api.delete(`despesas/${id}`);    
      }
      catch (error) {
        console.log(error.message);
        Alert.alert("Erro ao excluir a despesa", error.message);
      }
      finally {
        props.navigation.goBack();
      }    
    }

    // Alert.alert('excluir')
    Alert.alert(
      'Exclusão da Despesa', 
      'Confirma excluir a despesa?',
      [
        { // primeiro botão
          text: "Confirma", 
          style: 'cancel',  // mostra em vermelho, somente iOS
          onPress: () => confirmaExclusao() // terceiro parâmetro Action opcional
        },
        { // segundo botão
          text: "Cancela",
        },
      ]
    )
   
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
        Alert.alert("Erro ao buscar os dados da despesa", error.message);
      }    
    }

    props.navigation.setOptions({
      title: id > 0 ? 'Alterar Despesa' : 'Nova Despesa'
    })

    if (id > 0) buscaDespesa();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Valor</Text>
        <TextInput 
          placeholder="0,00" 
          style={styles.inputValor} 
          value={valor}
          keyboardType="decimal-pad" 
          onChangeText={setValor}
        />
      </View>

      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Descrição</Text>
        <TextInput 
          placeholder="Ex: Aluguel" 
          style={styles.inputText} 
          value={descricao}
          onChangeText={setDescricao}
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