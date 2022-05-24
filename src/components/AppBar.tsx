import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = ["APOD", "NeoWs", "MRP"];

const ResponsiveAppBar = () => {
  return (
    <AppBar style={{ backgroundColor: "black" }} position="static">
      <Container>
        <Toolbar>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              minWidth: 1000,
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="img"
              sx={{ mr: 2, display: { xs: "none", md: "flex" }, width: 150 }}
              src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
            ></Typography>
            <div style={{ display: "flex" }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
