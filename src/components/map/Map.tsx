import { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { MapActs } from '~/map/map.slice';
import { useAppSelector } from '~/store';

const { width: deviceWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 800,
    width: deviceWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const Map = () => {
  const dispatch = useDispatch();
  const { startPoint, endPoint, coordinates } = useAppSelector(state => state.map)


  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={coordinates}
        onRegionChange={(newRegion) => {
          dispatch(MapActs.setCoordinates(newRegion))
        }}
      >
        {endPoint &&
          <Marker
            coordinate={endPoint}
            title={"title"}
            style={{ backgroundColor: 'green' }}
            description={"description"}
          />
        }
        {startPoint &&
          <Marker
            coordinate={startPoint}
            title={"title"}
            style={{ backgroundColor: 'green' }}
            description={"description"}
          />
        }
        <Marker
          coordinate={coordinates}
          title={"title"}
          description={"description"}
        />
      </MapView>
    </View>
  )
};
