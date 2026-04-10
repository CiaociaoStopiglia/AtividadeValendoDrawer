import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar'; // Importe o StatusBar

import InicioScreen from './src/screens/InicioScreen';
import DisciplinasScreen from './src/screens/DisciplinasScreen';
import PerfilScreen from './src/screens/PerfilScreen'
import TarefasScreen from './src/screens/TarefasScreen'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Configura a barra de status para 'light' (texto branco) 
         para contrastar com o header azul 
      */}
      <StatusBar style="light" /> 
      
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1e40af',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            drawerActiveTintColor: '#1e40af',
            drawerActiveBackgroundColor: '#dbeafe',
            drawerInactiveTintColor: '#334155',
            drawerLabelStyle: {
              fontSize: 16,
              fontWeight: '500',
            },
            drawerStyle: {
              backgroundColor: '#f8fafc',
              width: 260,
            },
          }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Perfil" component={PerfilScreen} />
          <Drawer.Screen name="Configurações" component={ConfigScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}