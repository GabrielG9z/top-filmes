import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Button,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    async function carregarFavoritos() {
      try {
        //Acessar o storage @favoritos e tentar carregar os dados
        const dados = await AsyncStorage.getItem("@favoritos");

        // Havendo dados, transformamos eles em array de objetos
        const filmes = JSON.parse(dados);

        // Se realmente tem dados (ou seja, não é null), atualizamos o componente
        if (dados != null) {
          setListaFavoritos(filmes); //state de dados do componente
        }
      } catch (error) {
        console.log("Deu ruim no carregamento: " + error.message);
      }
    }
    carregarFavoritos();
  }, []);

  // Usamos o removeItem para apagar somente os dados dos @favoritos do nosso app
  const excluirFavoritos = async () => {
    await AsyncStorage.removeItem("@favoritos");
    // Atualizar o render do componente (removendo da tela os favoritos)
    setListaFavoritos([]);
  };

  const verDetalhes = (filmeSelecionado) => {
    navigation.navigate("Detalhes", { filme: filmeSelecionado });
  };

  const excluirTodosFavoritos = async () => {
    Alert.alert(
      "Excluir TODOS?",
      "Tem certeza que deseja excluir TODOS os favoritos ?",
      [
        {
          text: "Cancelar",
          onPress: () => {
            return false;
          },
          style: "cancel", //SOMENTE NO IOS
        },
        {
          text: "Sim, to nem ai",
          onPress: async () => {
            await AsyncStorage.removeItem("@favoritos");
            setListaFavoritos([]);
          },
          style: "destructive", //SOMENTE NO iOS
        },
      ]
    );
  };
  // Criamos a variavel indice
  const excluirUmFavorito = async (indice) => {
    // acessamos ela
    // Alert.alert(`Excluir filme no índice: ${indice}`);

    /*  Etapas para exclusão do filme escolhido */

    // 1) Conhecendo o índice, remover o elemento (filme do array listaFavoritos)
    /* splice: indicamos o indice de referência (na prática, o índice do filme que queremos remover e, a partir deste índice, a quantidade de elementos que queremos remover.
    Como aqui queremos apagar somente o próprio filme escolhido passamos 1) */
    listaFavoritos.splice(indice, 1);

    // 2) Atualizar o storage com a lista atualizada (ou seja, sem o filme)
    // O @favoritos (storage) só aceita strings, então usamos o JSON.stringfy para fazê-lo.
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaFavoritos));

    // 3) Recarregar do storage a nova lista de favoritos
    /* Obs.: é necessário transformar em array/objetos antes de manipular na aplicação */
    const listaDeFilmes = JSON.parse(await AsyncStorage.getItem("@favoritos"));

    // 4) Atualizar o state para um novo render na tela com a lista de favoritos
    setListaFavoritos(listaDeFilmes);
  };
  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text>Quantidade: {listaFavoritos.length}</Text>
          <Pressable
            style={estilos.botaoExcluirTudo}
            onPress={excluirTodosFavoritos}
          >
            <Text style={estilos.textoExcluirTudo}>
              <Ionicons name="trash-outline" size={16} />
              <Pressable title="Excluir Favoritos" onPress={excluirFavoritos}>
                <Text style={estilos.textoExcluirTudo}> Excluir Filme</Text>
              </Pressable>
            </Text>
          </Pressable>
        </View>

        {/* Programação necessária para acessar a listaFavoritos e exibir pelo menos o título de cada filme */}
        <ScrollView>
          {/* aqui passamos a variável indice como um parametro e ele pertence ao map*/}
          {listaFavoritos.map((filmeFavorito, indice) => {
            /* Atributo key passado por conta de performance */
            return (
              <Pressable
                onPress={verDetalhes.bind(this, filmeFavorito)}
                key={filmeFavorito.id}
                style={estilos.itemFilme}
              >
                <Text style={estilos.titulo}>{filmeFavorito.title}</Text>
                <Pressable
                  style={estilos.botaoExcluir}
                  // aqui transformamos a excluirUmFavorito como uma array function e passamos o indice como um parametro()
                  //onPress={() => excluirUmFavorito(indice)}
                  onPress={excluirUmFavorito.bind(this, indice)}
                >
                  <Ionicons name="trash" size={20} color="white" />
                </Pressable>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;

const estilos = StyleSheet.create({
  safeContainer: { flex: 1 },
  container: {
    flex: 1,
    padding: 8,
  },
  itemFilme: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#d3d3d3",
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  botaoExcluir: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 4,
  },
  cabecalho: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botaoExcluirTudo: {
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    borderRadius: 4,
  },
  textoExcluirTudo: { color: "red" },
  titulo: {
    flex: 1,
    fontSize: 14,
  },
});
