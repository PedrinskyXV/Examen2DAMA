import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Componentes del proyecto
import Index from './src/views/Index/index';
import Home from './src/views/Home/home';
import Registro from './src/views/Registro/registro';
import Settings from './src/views/Settings/settings';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name ="Login" component={Index}/>
          <Stack.Screen name ="Menu" component={Home}/>
          <Stack.Screen name ="Registro de Platillo/Bebida" component={Registro}/>
          <Stack.Screen name ="Settings" component={Settings}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

//https://www.reactnative.express/environment
//https://rnfirebase.io/
//https://medium.com/@FavreLeandro/tutorial-b%C3%A1sico-de-react-navigation-5bca57cdebdf
