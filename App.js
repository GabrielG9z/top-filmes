import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import logo from "./assets/images/logo.png";

const App = () => {
  const [fonteCarregada] = useFonts({
    monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });

  /* A condicional abaixo serve apenas para dar um pequeno tempo suficiente para o carregamento do arquivo de fonte antes do return do componente. */
  if (!fonteCarregada) return <Text>Fonte sendo carregada...</Text>;

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Image style={estilos.logo} source={logo} />
        <Text style={estilos.tituloApp}>Top-filmes</Text>
      </View>

      <View style={estilos.viewBotoes}>
        <Pressable style={estilos.botaoInicial}>
          <Text style={estilos.textoBotao}>Buscar Filmes</Text>
        </Pressable>

        <Pressable style={estilos.botaoInicial}>
          <Text style={estilos.textoBotao}>Favoritos</Text>
        </Pressable>
      </View>

      <View style={estilos.viewRodape}>
        <Pressable style={estilos.botaoFooter}>
          <Text style={estilos.textoBotao}>Privacidade</Text>
        </Pressable>

        <Pressable style={estilos.botaoFooter}>
          <Text style={estilos.textoBotao}>Sobre</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    textAlign: "center",
    width: "80%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 128,
    height: 128,
  },
  tituloApp: {
    fontFamily: "monoton",
    fontSize: 36,
    color: "#5451a6",
    // fontWeight: "bold",
  },
  viewBotoes: {
    flex: 2,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  viewRodape: {
    justifyContent: "space-between",
    flex: 0.5,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#c465d1",
  },
  botaoInicial: {
    borderStyle: "solid",
    borderWidth: 1,
    padding: 16,
    backgroundColor: "#c465d1",
    alignContent: "center",
  },
  botaoFooter: {
    padding: 22,
  },
  textoBotao: {
    color: "white",
  },
});
