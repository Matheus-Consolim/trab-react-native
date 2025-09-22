import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native-web";

const Drawer = createDrawerNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name = "Home" component={HomeScreen} />
        <Drawer.Screen name = "Perfil" component={ProfileScreen} />
        <Drawer.Screen name = "Configurações" component={ConfigScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

//Tela 1 

function HomeScreen() {
  return (
    <View style={{ margin: 'auto', flex: 1, justifyContent: 'center', allignItems: 'center'}}>
      <Text>Tela Home</Text>
    </View>
  );
}

// Tela 2

function ProfileScreen() {
  return (
    <View style={{margin: 'auto', flex: 1, justifyContent: 'center', allignItems: 'center', textAlign: 'center'}}>
      <Text> Tela Perfil</Text>
    </View>
  );
}

// Tela 3 

function ConfigScreen() {
  return(
    <View style={{margin: 'auto', flex: 1, justifyContent: 'Center', allignItems: 'center', textAlign: 'center'}}
    > 
    <Text>Tela de Configurações</Text>
    </View>
  );
}