import React from 'react';
import { Button, Dimensions, View } from 'react-native';
import { Header } from "~/components/screens/home/Header";
import { Map } from "~/components/map/Map";
import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector } from '~/store';
import { MapActs } from '~/map/map.slice';

import { router } from 'expo-router';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { startPoint, coordinates } = useAppSelector(state => state.map)
  const handleClick = () => {
    if (startPoint) {
      dispatch(MapActs.setEndPoint(coordinates))
    } else {
      dispatch(MapActs.setStartPoint(coordinates))
    }
  }

  return (
    <View style={{ position: "relative", width: deviceWidth, height: deviceHeight }}>
      <Header />
      <Map />
      <Button title='click me' onPress={handleClick} />
      <Button title='login' onPress={() => {
        // router.push('/login')
      }} />
    </View>
  );
};

