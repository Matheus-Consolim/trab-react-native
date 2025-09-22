import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Home</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Detalhes', { produtoId: 101 })}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { produtoId } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Detalhes</Text>
      <Text>ID do produto: {produtoId}</Text>
      <Button
        title="Ir para o perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela de Perfil</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
