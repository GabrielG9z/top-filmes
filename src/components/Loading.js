import { StyleSheet, View, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View style={estilos.viewLoading}>
      <ActivityIndicator size={60} color="#5451a6" />
    </View>
  );
};

export default Loading;

const estilos = StyleSheet.create({
  viewLoading: {
    flex: 1,
    justifyContent: "center",
  },
});