import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, MarkerAnimated, PROVIDER_GOOGLE } from 'react-native-maps';
import { useDispatch } from 'react-redux';
import { MapActs } from '~/map/map.slice';
import { useAppSelector } from '~/store';
import { Pin } from './Pin';

export const Map: React.FC = (props) => {
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
            description={"description"}
          >
            <Pin text='End' />
          </Marker>
        }
        {startPoint &&
          <Marker
            coordinate={startPoint}
            title={"title"}
            description={"description"}
          >
            <Pin text='Start' />
          </Marker>
        }
      </MapView>
      {!(startPoint && endPoint) && (
        <Pin text={startPoint ? "End" : "Start"} style={{ bottom: "50%" }} />
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});




