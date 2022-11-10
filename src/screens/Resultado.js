import { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import api from "../services/api";

const Resultados = ({ route }) => {
  /* Usamos a prop route (do React Navigation) para acessar os parâmetros desta rota de navegação e extrair os dados (neste caso, filme) enviados para esta tela Resultados */
  const { filme } = route.params;

  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get("/search/movie", {
          params: {
            api_key: "372a13f141ce4f6618d8a2cbaeecf7ef",
            language: "pt-BR",
            query: filme,
            include_adult: true,
          },
        });

        setResultados(resposta.data.results);
      } catch (error) {
        console.log("Deu ruim a busca na API:" + error.message);
      }
    }
    buscarFilmes();
  }, []);

  console.log(resultados);

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>
      <View style={estilos.viewFilmes}>
        {resultados.map((resultado) => {
          return <Text key={resultado.id}>{resultado.title}</Text>;
        })}
      </View>
    </SafeAreaView>
  );
};

export default Resultados;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  viewfIlmes: {
    marginVertical: 8,
  },
});
