import { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import api from "../services/api";
import apiKey from "../../apiKey";

const Resultados = ({ route }) => {
  /* Usamos a prop route (do React Navigation) para acessar os parâmetros desta rota de navegação e extrair os dados (neste caso, filme) enviados para esta tela Resultados */
  const { filme } = route.params;

  /* useEffect: hook do React que executa operações no momento em que o componente (neste caso, resultado) é renderizado */
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    /* Assim que entramos em Resultado, é executada a função async buscarFilmes que por sua vez através do axios executa a consulta à API baseada no filme que foi digitado. */
    async function buscarFilmes() {
      /* Aguardamos a resposta da consulta get ao endpoint "/search/movie" da api. Observe que este endpoint precisa de parâmetros para a execução correta da consulta. Estes parâmetros DEVEM ter o mesmo nome indicado na documentação do endpoint/API. */
      try {
        const resposta = await api.get("/search/movie", {
          params: {
            api_key: apiKey,
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
