import { View, StyleSheet, Dimensions } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Body } from "../../ui/Body"


export const Header: React.FC = () => {
  const insected = useSafeAreaInsets()
  const deviceWidth = Dimensions.get('window').width

  return (
    <View style={{ ...styles.header, top: insected.top, width: deviceWidth }}>
      <Body text="1cab" style={styles.headerText} />
    </View >
  )
}


const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    position: 'absolute',
    height: 40,
    zIndex: 1
  },
  headerText: {
    color: '#000',
    fontSize: 23,
    textAlign: 'center',
  },
})

