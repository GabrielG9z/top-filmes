import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import fotoAlternativa from "../../assets/images/foto-alternativa.jpg";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CardFilme = ({ filme }) => {
  const { title, poster_path } = filme;

  /* Acessar recursos do React Navigation (sem Props!) */
  const navigation = useNavigation();

  const leiaMais = () => {
    // Alert.alert("Olha o menino piruleta");
    navigation.navigate("Detalhes", { filme });
  };
  const salvar = async () => {
    /* Etapas para o uso do asyncStorage
    
    1) Carregamento do storage do aparelho (se houver, caso contrário retorna null*/
    const filmesFavoritos = await AsyncStorage.getItem("@favoritos");
    /*2) Havendo storage prévio, transformamos os dados do filme em objeto e guardamos numa lista (array) */
    let listaDeFilmes = JSON.parse(filmesFavoritos);

    let teste; //undefined
    /* 3) Se a lista não for indefinida, vamos inicia-la vazia*/
    if (!listaDeFilmes) {
      listaDeFilmes = [];
    }

    /* 4) Adcicionamos os dados do filme na lista (array) */
    listaDeFilmes.push(filme);

    /* 5) Finalmente, salvamos como string no storage do dispositivo*/
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaDeFilmes));
    Alert.alert("Favoritos", "Filme salvo com sucesso! ");
    console.log(listaDeFilmes);
  };
  return (
    <View style={estilos.card}>
      <Image
        style={estilos.imagem}
        source={
          filme.poster_path
            ? {
                uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
              }
            : fotoAlternativa
        }
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>{title}</Text>

        <View style={estilos.botoes}>
          <Pressable style={estilos.botao} onPress={leiaMais}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="book" size={12} />
              Leia Mais
            </Text>
          </Pressable>
          <Pressable style={estilos.botao} onPress={salvar}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="save" size={12} />
              Salvar
            </Text>
          </Pressable>
        </View>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagem: {
    height: 135,
    width: 100,
  },
  corpo: {
    flex: 2,
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
  titulo: {
    backgroundColor: "#5451a6",
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
    textAlign: "center",
  },
});
