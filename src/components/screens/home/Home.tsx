import React from 'react';
import { Dimensions, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from "~/components/screens/home/Header";
import { Map } from "~/components/map/Map";


const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const Home: React.FC = () => {

  return (
    <SafeAreaProvider>
      <View style={{ position: "relative", width: deviceWidth, height: deviceHeight }}>
        <Header />
        <Map />
      </View>
    </SafeAreaProvider>
  );
};

