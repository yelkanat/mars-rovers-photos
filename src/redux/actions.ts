export const FETCH_PHOTOS_PENDING = "FETCH_PHOTOS_PENDING";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const FETCH_PHOTOS_FAILURE = "FETCH_PHOTOS_FAILURE";

const nasaBaseAPI =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";

const apiKey = "MyKHvAhXIX0MxO2m3ByW16wwSNekxF2jeXakn9hP";

export const fetchPhotos = (page: number = 1) => {
  return (dispatch: Function) => {
    dispatch({
      type: FETCH_PHOTOS_PENDING,
    });
    return fetch(`${nasaBaseAPI}?sol=1000&page=${page}&api_key=${apiKey}`)
      .then((response) => response.json().then((body) => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: FETCH_PHOTOS_FAILURE,
            error: body.error, //check error
          });
        } else {
          dispatch({
            type: FETCH_PHOTOS_SUCCESS,
            payload: body,
          });
        }
      })
      .catch(function(error) {
        dispatch({
          type: FETCH_PHOTOS_FAILURE,
          error: error,
        });
      });
  };
};

export const fetchPhotosSol = (
  sol: string = "1000",
  rover: string = "MAST"
) => {
  return (dispatch: Function) => {
    dispatch({
      type: FETCH_PHOTOS_PENDING,
    });
    return fetch(`${nasaBaseAPI}?sol=${sol}&camera=${rover}&api_key=${apiKey}`)
      .then((response) => response.json().then((body) => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: FETCH_PHOTOS_FAILURE,
            error: body.error, //check error
          });
        } else {
          dispatch({
            type: FETCH_PHOTOS_SUCCESS,
            payload: body,
          });
        }
      })
      .catch(function(error) {
        dispatch({
          type: FETCH_PHOTOS_FAILURE,
          error: error,
        });
      });
  };
};

export const fetchPhotosDate = (date: any) => {
  console.log("first", date);
  return (dispatch: Function) => {
    dispatch({
      type: FETCH_PHOTOS_PENDING,
    });
    return fetch(`${nasaBaseAPI}?earth_date=2015-08-18&api_key=${apiKey}`)
      .then((response) => response.json().then((body) => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: FETCH_PHOTOS_FAILURE,
            error: body.error, //check error
          });
        } else {
          dispatch({
            type: FETCH_PHOTOS_SUCCESS,
            payload: body,
          });
        }
      })
      .catch(function(error) {
        dispatch({
          type: FETCH_PHOTOS_FAILURE,
          error: error,
        });
      });
  };
};
