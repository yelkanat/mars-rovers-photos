import { StoreShape } from "./actionTypes";

export const getPhotos = (state: StoreShape) => {
  return state.photos;
};

export const getFetchProgress = (state: StoreShape) => state.fetchProgress;
