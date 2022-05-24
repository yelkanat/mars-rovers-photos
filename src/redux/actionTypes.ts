export interface StartAndEnd {
  start: string;
  end: string;
}

export interface Origin {
  city: string;
  state: string;
  pickup: StartAndEnd;
}

export interface Destination {
  city: string;
  state: string;
  dropoff: StartAndEnd;
}

export interface Location {
  city: string;
  state: string;
  start: string;
  end: string;
}
export interface Photos {
  miles: string;
  origin: Origin;
  destination: Destination;
  photos: [];
}

export type FetchProgress = "pending" | "success" | "failure" | "none";

export interface StoreShape {
  photos: Photos[];
  fetchProgress: FetchProgress | any;
}

export interface Action {
  type: string;
  payload: any;
}

export type sortTypes =
  | "pickupDate"
  | "dropoffDate"
  | "price"
  | "origin"
  | "destination"
  | "miles";

export const sortByLabels = {
  pickupDate: "Pickup Date",
  dropoffDate: "Dropoff Date",
  price: "Price",
  origin: "Origin",
  destination: "Destination",
  miles: "Miles",
};
export type orderType = "desc" | "asc" | undefined;
