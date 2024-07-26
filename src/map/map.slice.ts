import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Coordinates {
  latitude: number,
  longitude: number,
  latitudeDelta: number
  longitudeDelta: number
}

interface MapState {
  coordinates: Coordinates;
  startPoint?: Coordinates;
  endPoint?: Coordinates;
}

const initialState: MapState = {
  coordinates: {
    latitude: 35.6895,
    longitude: 51.3896,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setCoordinates: (state, action: PayloadAction<Coordinates>) => {
      state.coordinates = action.payload;
    },
    setStartPoint: (state, action: PayloadAction<Coordinates>) => {
      state.startPoint = action.payload;
    },
    setEndPoint: (state, action: PayloadAction<Coordinates>) => {
      state.endPoint = action.payload;
    },
  },
});

export const MapActs = mapSlice.actions;
export const mapReducer = mapSlice.reducer;
