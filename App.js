import React, {useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {UsuarioProvider} from './contexts/UsuarioContext'

import Login from './screens/Usuario/Login'
import Cadastro from './screens/Usuario/Cadastro'
import ListagemEstacionamento from './screens/Estacionamentos/ListagemEstacionamento'
import CadastroEstacionamento from './screens/Estacionamentos/CadastroEstacionamento'
import ListagemVagas from './screens/Vagas/ListagemVagas'

const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
    <UsuarioProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Cadastro' component={Cadastro} />
          <Stack.Screen name='Listagem de Estacionamentos' component={ListagemEstacionamento} />
          <Stack.Screen name='Cadastrar Estacionamento' component={CadastroEstacionamento} />
          <Stack.Screen name='Listagem de Vagas' component={ListagemVagas} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsuarioProvider>    
  )
}