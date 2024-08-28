import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from "~/components/screens/home/Header";
import { Map } from "~/components/map/Map";
import { useDispatch } from 'react-redux';
import { useAppSelector } from '~/store';
import { MapActs } from '~/map/map.slice';
import { MyButton } from '~/components/ui/Button';
enum Phase {
  SELECT_START,
  SELECT_END,
  REQUEST_RIDE
}

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { startPoint, coordinates, endPoint } = useAppSelector(state => state.map)
  const [phase, setPhase] = useState(Phase.SELECT_START)

  useEffect(() => {
    if (startPoint && endPoint) {
      setPhase(Phase.REQUEST_RIDE)
    } else if (startPoint) {
      setPhase(Phase.SELECT_END)
    } else {
      setPhase(Phase.SELECT_START)
    }
  }, [startPoint, endPoint])

  const handleClick = () => {
    if (startPoint) {
      dispatch(MapActs.setEndPoint(coordinates))
    } else {
      dispatch(MapActs.setStartPoint(coordinates))
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <Map />
      <View style={styles.footer}>
        {phase === Phase.SELECT_START &&
          <MyButton style={{
            position: "absolute",
            bottom: 10,
          }}
            onPress={handleClick}
            text="Select Start" />
        }
        {phase === Phase.SELECT_END &&
          <MyButton style={{
            position: "absolute",
            bottom: 10,
          }}
            onPress={handleClick}
            text="Select End" />
        }
        {phase === Phase.REQUEST_RIDE &&
          <MyButton style={{
            position: "absolute",
            bottom: 10,
          }}
            onPress={() => { alert("Loading...") }}
            text="Request a ride!" />
        }
      </View>
    </View >
  );
};


const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },
  footer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10
  }
});


