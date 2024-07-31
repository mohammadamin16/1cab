import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { router } from 'expo-router';
import App from '../App';
import Login from './login';

export default function Page() {
  // return <Text>Page</Text>
  return <Login />
}
