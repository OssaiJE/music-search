import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAlbum, TArtist, TTrack } from '../../types/types';

export interface State {
  artist: TArtist
  currentTrack: TTrack
  currentAlbum: TAlbum
}

const initialState: State = {
  artist: {} as TArtist,
  currentTrack: {} as TTrack,
  currentAlbum: {} as TAlbum
};

export const appSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setArtist: (state, action: PayloadAction<TArtist>) => {
      state.artist = action.payload;
    },
    setCurrentTrack: (state, action: PayloadAction<TTrack>) => {
      state.currentTrack = action.payload;
    },
    setCurrentAlbum: (state, action: PayloadAction<TAlbum>) => {
        state.currentAlbum = action.payload;
      },
  },
});

export const { setArtist, setCurrentTrack, setCurrentAlbum } = appSlice.actions;

export default appSlice.reducer;
