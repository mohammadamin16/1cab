import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { Home } from './src/components/screens/home/Home';
import { useStartApp } from './src/useStartApp';
import { Provider } from 'react-redux';
import store from './src/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function App() {
  useStartApp();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </Provider>
  )
}
