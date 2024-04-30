import React from 'react';
import { Text, View } from 'react-native';
import icons from "../../constants/icons.js";

// import { styles } from './styles';

export default function Home() {
  return (
    <View>
      <Image source={icons.logo} />

    </View>
  );
}