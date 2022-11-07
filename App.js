import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const App = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Text>Top-filmes</Text>
      </View>

      <View style={estilos.viewBotoes}>
        <Button title="Buscar Filmes" />
        <Button title="Favoritos" />
      </View>

      <View style={estilos.viewBotoes}>
        <Button title="Privacidade" />
        <Button title="Sobre" />
      </View>
    </SafeAreaView>
  );
};

export default App;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "yellowgreen",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    backgroundColor: "purple",
    textAlign: "center",
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewBotoes: {
    flex: 2,
    backgroundColor: "orangered",
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  viewRodape: {
    flex: 0.5,
    backgroundColor: "red",
    width: "80%",
    justifyContent: "space-between",
    flex: "row",
  },
});
