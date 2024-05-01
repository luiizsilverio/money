import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Picker } from '@react-native-picker/picker';

import { styles } from "./cadastro.style";
import icons from "../../constants/icons";
import theme from "../../constants/theme";

export default function Cadastro(props) {
  const [id, setId] = useState(0);
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  function handleSalvar() {
    
    props.navigation.goBack();
  }

  function handleExcluir() {

    props.navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Valor</Text>
        <TextInput 
          placeholder="0,00" 
          style={styles.inputValor} 
          defaultValue={valor.toFixed(2)} 
          keyboardType="decimal-pad" 
        />
      </View>

      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Descrição</Text>
        <TextInput 
          placeholder="Ex: Aluguel" 
          style={styles.inputText} 
          defaultValue={descricao} 
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