import { Dimensions, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from './Header';
import { Map } from '../../map/Map';

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

