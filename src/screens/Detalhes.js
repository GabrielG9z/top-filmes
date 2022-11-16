import { StyleSheet, Text, View } from "react-native";
import React from "react";

/* Prop de route para acesso aos dados trafegados entre a navegação entre as telas/rotas */

const Detalhes = ({ route }) => {
  console.log(route);

  /* Extraindo dos parametros da rota os dados do objeto filme */
  const { filme } = route.params;
  console.log(filme);
  return (
    <View>
      <Text>Detalhes</Text>
    </View>
  );
};

export default Detalhes;

const styles = StyleSheet.create({});
