import React, { createContext, useState } from 'react';
import { Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackScreens from './routes/StackScreens';
import IndexScreens from './routes/IndexScreens';
import Dashborad from './routes/TabsScreens';

import { AuthProvider } from './contexts/auth';
//quando ele termina de fazer todo processo retorna para login e verifica se ta logado ou não
export default function App() {


  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' />
      <NavigationContainer>
        <AuthProvider>
          <IndexScreens />
        </AuthProvider>

      </NavigationContainer>
    </>

  );
}

