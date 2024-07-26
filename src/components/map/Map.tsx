import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

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

export const Map = () => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: 35.7,
        longitude: 51,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
    </MapView>
  </View>
);
