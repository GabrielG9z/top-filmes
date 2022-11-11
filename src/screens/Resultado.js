import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  Image,
  FlatList,
} from "react-native";
import api from "../services/api";
import apiKey from "../../apiKey";
import Loading from "../components/Loading";
import CardFilme from "../components/CardFilme";
import ItemSeparador from "../components/ItemSeparador";
import ItemVazio from "../components/ItemVazio";

const Resultados = ({ route }) => {
  /* Usamos a prop route (do React Navigation) para acessar os parâmetros desta rota de navegação e extrair os dados (neste caso, filme) enviados para esta tela Resultados */
  const { filme } = route.params;

  /* useEffect: hook do React que executa operações no momento em que o componente (neste caso, resultado) é renderizado */
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

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

        setInterval(() => {
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.log("Deu ruim a busca na API:" + error.message);
      }
    }
    buscarFilmes();
  }, []);

  if (loading) return <Loading />;

  // console.log(resultados);

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>

      {/* Programação de if else (evaluate) só pode ser usada dentro do jsx.*/}
      {/* Se loading for TRUE, renderize <Loading> */}
      {loading && <Loading />}

      <View style={estilos.viewfIlmes}>
        {!loading && (
          <FlatList
            ItemSeparatorComponent={ItemSeparador}
            ListEmptyComponent={ItemVazio}
            data={resultados}
            renderItem={({ item }) => {
              return <CardFilme filme={item} />;
            }}
            keyExtractor={(item) => item.id}
          />
        )}
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
  imagem: {
    height: 250,
  },
});
