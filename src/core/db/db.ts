import AsyncStorage from '@react-native-async-storage/async-storage';


export const store = {
  async setValue(value: object | string) {
    const serializedValue = JSON.stringify(value);
    try {
      await AsyncStorage.setItem('my-key', serializedValue)
    } catch (e) {
      console.error("storeData", e)
    }
  },

  getString(key: string): Promise<string | null> {
    return AsyncStorage.getItem(key);
  }
}


