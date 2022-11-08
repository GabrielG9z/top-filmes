import { StatusBar } from "react-native";
import Favoritos from "./src/screens/Favoritos";
import FormBusca from "./src/screens/FormBusca";

const App = () => {
  return (
    <>
      {/* Opções para o barStyle: dark-content, light-content ou default */}
      <StatusBar barStyle="light-content" />
      <Favoritos />
    </>
  );
};

export default App;
