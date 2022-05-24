import {
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  FETCH_PHOTOS_PENDING,
} from "./actions";
import { StoreShape } from "./actionTypes";

const initialState: StoreShape = {
  photos: [],
  fetchProgress: "none",
};

export const marsReducer = (state: StoreShape = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PHOTOS_PENDING: {
      return {
        ...state,
        fetchProgress: "pending",
      };
    }
    case FETCH_PHOTOS_SUCCESS: {
      if (action.payload === undefined) {
        return state;
      }
      //   console.log("aaa", state.photos);

      return {
        ...state,
        photos: action.payload.photos,
        fetchProgress: "success",
      };
    }
    case FETCH_PHOTOS_FAILURE: {
      //   console.log("FETCH_PHOTOS_FAILURE", action);
      return {
        ...state,
        fetchProgress: "failure",
      };
    }
    default: {
      return state;
    }
  }
};
