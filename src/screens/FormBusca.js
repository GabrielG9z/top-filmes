import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const FormBusca = ({ navigation }) => {
  // const inputFilme = (event) => setFilme(event.target.value);

  // Captura em tempo real do que é digitado no TextInput através do evento onChangeText - solução do professor

  const FilmeDigitado = (valorDigitado) => {
    setFilme(valorDigitado);
  };

  const [filme, setFilme] = useState("");

  //  Função chamada toda vez que o evento for chamado
  const buscarFilmes = () => {
    //  Se filme gerenciado pelo useState estiver vazio/undefined/false
    if (!filme) {
      return Alert.alert("Ops", "Você deve digitar o nome de um filme");
    } else {
      /* Usamos a prop navigation (que vem do React Navigation programado no App) para acessar uma nova tela (no caso, Resultados). Para esta tela, passamos como objeto os dados digitados no formulário (neste caso, filme) */
      navigation.navigate("Resultados", { filme });
    }
  };

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>
        Start Trek? O Poderoso Chefão? A trilogia Senhor dos Anéis?
      </Text>
      <Text style={estilos.subtitulo}>
        Localize um fime que você viu ou gostaria de ver!
      </Text>
      <View style={estilos.caixa}>
        <Ionicons name="film" size={46} color="black" style={estilos.icon} />
        <TextInput
          style={estilos.input}
          placeholder="Filme..."
          onChangeText={FilmeDigitado}
        ></TextInput>
      </View>
      {/* Minha solução */}
      {/* <Button title='Procurar' style={estilos.botao} onPress={() => Alert.alert(titulo, resultado)}/> */}

      {/* Solução do professor */}
      <Button title="Procurar" style={estilos.botao} onPress={buscarFilmes} />
    </SafeAreaView>
  );
};

export default FormBusca;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 16,
  },
  subtitulo: {
    fontSize: 16,
    marginTop: 10,
  },
  caixa: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
  },

  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    // flex: 0.90,
  },
  botao: {
    backgroundColor: "#5456a6",
    height: 25,
  },
});
