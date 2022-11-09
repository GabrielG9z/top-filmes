import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  View,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { useState } from "react";

const FormBusca = () => {
  /* Captura em tempo real do que é digitado no TextInput através do evento onChangeText */
  const filmeDigitado = (valorDigitado) => {
    setFilme(valorDigitado);
  };

  /* Hook useState para monitorar/armazenar o filme que será buscado a partir do formulário */
  const [filme, setFilme] = useState("");

  /* Se filme (gerenciado pelo useState) estiver vazio/undefined/false */
  const buscarFilmes = () => {
    if (!filme) {
      Alert.alert("Ops", "Você deve digitar um filme");
    }

    Alert.alert("Você procurou por:", filme);
  };

  return (
    <SafeAreaView>
      <Text style={estilos.texto}>
        Aqui você pode encontrar qualquer filme que deseja !
      </Text>
      <View style={estilos.container}>
        <Ionicons name="film" size={44} color="black" />
        <TextInput
          style={estilos.input}
          onChangeText={filmeDigitado}
          placeholder="Busque um Filme"
        />
      </View>
      <Button title="Procurar" color="#c465d1" onPress={buscarFilmes} />
    </SafeAreaView>
  );
};

export default FormBusca;

const estilos = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  botaoForm: {
    paddingTop: 5,
    backgroundColor: "#c465d1",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
