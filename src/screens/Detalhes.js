import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";

/* Prop de route para acesso aos dados trafegados entre a navegação entre as telas/rotas */

const Detalhes = ({ route }) => {
  console.log(route);

  /* Extraindo dos parametros da rota os dados do objeto filme */
  const { filme } = route.params;
  console.log(filme);
  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <ImageBackground
          style={estilos.imagem}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`,
          }}
        >
          <Text style={estilos.titulo}>{filme.title}</Text>
        </ImageBackground>
        <View style={estilos.conteudo}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text>
              Avaliação: {filme.vote_average} | Lançamento: {filme.release_date}
            </Text>
            <Text>{filme.overview || "Sem descrição"}</Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detalhes;

const estilos = StyleSheet.create({
  safeContainer: { flex: 1 },
  /* Aplicado aqui pois no IOS não funciona direto na SafeAreaView */
  container: {
    flex: 1,
    // padding: 8,
  },
  titulo: {
    backgroundColor: "rgba(0,0,0, 0.5)",
    color: "white",
    textAlign: "center",
    padding: 16,
    fontWeight: "bold",
    fontSize: 16,
  },
  imagem: {
    height: 200,
    justifyContent: "center",
  },
  conteudo: {
    /* Flex 1 adicionado para que possamos usar o scrollView  */
    flex: 1,
    padding: 16,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 8,
  },
});
