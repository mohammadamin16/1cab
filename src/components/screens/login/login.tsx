import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Image } from "expo-image"
import CarImage from "../../../../assets/car_waiting.png"
import { router } from "expo-router"
import { Body, FontSize } from '~/components/ui/Body';
import { MyButton } from '~/components/ui/Button';
import { MyInput } from '~/components/ui/Input';
import { useDispatch } from 'react-redux';
import { Route, RouterActs } from '~/router/router.slice';

export function Login() {
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(RouterActs.setCurrentRoute(Route.Home))
  }

  return (
    <View style={styles.container}>
      <Body style={styles.title} size={FontSize.XXXLARGE} text="1cab" />
      <View style={{ width: "100%", flex: 2, alignItems: "center", justifyContent: "center" }} >
        <Image style={{ width: "80%", height: 400 }} contentFit="contain" source={CarImage} />
      </View>
      <View style={styles.footer}>
        <MyInput styles={{}} placeholder="09123456789" label="phoneNumber" value={phoneNumber} onChange={setPhoneNumber} />
        <Body text="I agree to the terms and conditions." />
        <MyButton text="Login" onPress={handleLogin} />
      </View>
    </View >
  )
}



const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: "100%",
  },
  footer: {
    position: "absolute",
    gap: 18,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 8
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 140,
    fontStyle: "normal",
    color: "#000000"
  },
})
