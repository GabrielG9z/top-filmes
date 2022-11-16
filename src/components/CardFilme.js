import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const CardFilme = ({ filme }) => {
  const { title, poster_path } = filme;
  return (
    <View style={estilos.card}>
      <Image
        style={estilos.imagem}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
        }}
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>{title}</Text>
      </View>
      <View style={estilos.botoes}>
        <Pressable style={estilos.botao}>
          <Text>Leia Mais</Text>
        </Pressable>
        <Pressable style={estilos.botao}>
          <Text style={estilos.textoBotao}>Salvar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CardFilme;

const estilos = StyleSheet.create({
  card: {
    marginVertical: 4,
    flexDirection: "row",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imagem: {
    height: 250,
    width: 150,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  botao: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#5451a6",
  },
  textoBotao: {
    color: "#5451a6",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
