import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./despesa.style.js";

export default function Despesa({ data, onClick }) {

  return (
    <TouchableOpacity onPress={() => onClick(data.id)}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image 
            source={data.icon ? {uri: data.icon} : null} 
            style={styles.icon} 
          /> 
          <View style={styles.description}>
            <Text style={styles.title}>{data.categoria}</Text>
            <Text style={styles.text}>{data.descricao}</Text>
          </View>
        </View>
        <View style={styles.total}>
          <Text style={styles.real}>R$ {'   '}</Text>
          <Text style={styles.valor}>
            {data.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </Text>
        </View>
      </View>
    </TouchableOpacity> 
  )
}