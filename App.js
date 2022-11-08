import { StatusBar } from "react-native";
import Favoritos from "./src/screens/Favoritos";
import FormBusca from "./src/screens/FormBusca";
import Privacidade from "./src/screens/Privacidade";
import Sobre from "./src/screens/Sobre";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";

const App = () => {
  /* Inicializando através de uma constante o gerenciador de navegação Stack (pilha de telas) */
  const Stack = createNativeStackNavigator();

  return (
    <>
      {/* Opções para o barStyle: dark-content, light-content ou default */}
      <StatusBar barStyle="light-content" />
      {/* O NavigationContainer deve envolver todas as telas navegáveis do nosso App. */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#c465d1",
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            component={Home}
            name="Home"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={FormBusca}
            name="FormBusca"
            options={{
              title: "Buscar Filmes",
            }}
          />
          <Stack.Screen component={Favoritos} name="Favoritos" />
          <Stack.Screen component={Privacidade} name="Privacidade" />
          <Stack.Screen component={Sobre} name="Sobre" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
