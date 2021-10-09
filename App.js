import React from 'react';
import { StyleSheet } from 'react-native';
import{NavigationContainer}from'@react-navigation/native';
import{createNativeStackNavigator}from'@react-navigation/native-stack';
import Login from './src/views/Login/login';
import Index from './src/views/Index/index';
import Bebidas from './src/views/Menu/bebidas';
import Carnes from './src/views/Menu/carnes';
import Ensaladas from './src/views/Menu/ensaladas';
import Mariscos from './src/views/Menu/mariscos';
import Agregar from './src/views/js/Agregar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          /*headerStyle: {
            backgroundColor: 'cyan',
          },*/
          headerTitleAlign: 'center',
          headerBackVisible: true, //Oculta el logo atrás
          headerShown: true, //Oculta el stack
        }}
      >
        <Stack.Screen name="LOGIN" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="INDEX" component={Index} options={{headerShown: false, title:'BRASAS Y LEÑA RESTAURANT'}}/>
        <Stack.Screen name="BEBIDAS" component={Bebidas} />
        <Stack.Screen name="CARNES" component={Carnes} />
        <Stack.Screen name="ENSALADAS" component={Ensaladas} />
        <Stack.Screen name="MARISCOS" component={Mariscos} />
        <Stack.Screen name="AGREGAR" component={Agregar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tituloMenu: {
      fontSize: 20,
      color: '#FFD700',
      backgroundColor: 'black',
  },
});