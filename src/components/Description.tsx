import * as React from "react";

export const Description = () => {
  return (
    <div
      style={{
        width: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 50,
      }}
    >
      <h1>Mars Rover Photos</h1>
      <div>
        Each rover has its own set of photos stored in the database, which can
        be queried separately. There are several possible queries that can be
        made against the API. Photos are organized by the sol (Martian rotation
        or day) on which they were taken, counting up from the rover's landing
        date. A photo taken on Curiosity's 1000th Martian sol exploring Mars,
        for example, will have a sol attribute of 1000. If instead you prefer to
        search by the Earth date on which a photo was taken, you can do that,
        too.
      </div>
    </div>
  );
};
