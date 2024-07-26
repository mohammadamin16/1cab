import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { Home } from './src/components/screens/home/Home';
import { useStartApp } from './src/useStartApp';


SplashScreen.preventAutoHideAsync();

export default function App() {
  useStartApp();
  return (
    <Home />
  )
}
