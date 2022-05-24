import * as React from "react";
import PhotoAndInfoCard from "./components/PhotoAndInfoCard";
import AppBar from "./components/AppBar";
import { Description } from "./components/Description";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Description />
        <PhotoAndInfoCard photos={[]} fetchProgress={"none"} />
      </div>
    </Provider>
  );
};

export default App;
