import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 800,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
// 35.7304306,51.4097553,13z
export const Map = () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 35.7,
        longitude: 51,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <Marker draggable
        coordinate={{ latitude: 35.7, longitude: 51 }}
        onDragStart={(e) => { console.log(e) }}
      />
    </MapView>
  </View>
);
