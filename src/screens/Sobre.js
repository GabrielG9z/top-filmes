import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const Sobre = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.texto}>Sobre o app Top Filmes</Text>
      <Text style={estilos.texto}>
        O app <Text style={estilos.nomeApp}>Top Filmes</Text> é um aplicativo
        com a finalidade de permitir a busca por informações sobre filmes
        existentes na base de dados pública disponibilizada pelo site The Movie
        Database (TMDb). Ao localizar um filme, o usuário pode visualizar
        informações como título, data de lançamento, nota média de avaliação e
        uma breve descrição sobre o filme e, caso queira, salvar estas
        informações em uma lista no próprio aplicativo para visualização
        posterior. O aplicativo poderá receber novos recursos conforme o
        feedback e demanda dos usuários.
      </Text>
      <Text style={estilos.texto}>Top Filmes &copy; 2022</Text>
    </SafeAreaView>
  );
};

export default Sobre;

const estilos = StyleSheet.create({
  titulo: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 8,
  },
  container: {
    flex: 1,
    padding: 8,
  },
  texto: {
    marginVertical: 8,
  },
  nomeApp: {
    color: "5451a6",
    fontWeight: "bold",
  },
});
