import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { useStartApp } from './src/useStartApp';
import { Provider } from 'react-redux';
import store from './src/store';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Main } from './Main';

SplashScreen.preventAutoHideAsync();

export default function App() {
  useStartApp();
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView>
          <Main />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  )
}
