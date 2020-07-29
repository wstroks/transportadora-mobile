import React from 'react';
import { Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackScreens from './routes/StackScreens';
import Dashborad from './routes/TabsScreens';
//quando ele termina de fazer todo processo retorna para login e verifica se ta logado ou não
export default function App() {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='#000'/>
    <NavigationContainer>
      <StackScreens />

    </NavigationContainer>
    </>
    
  );
}

