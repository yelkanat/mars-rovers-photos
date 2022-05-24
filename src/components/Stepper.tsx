import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
interface Props {
  data: any;
}
function Stepper(props: Props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.data.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
      <Paper
        square
        elevation={3}
        sx={{
          display: "flex",
          //   alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
          flexWrap: "wrap",
          height: 250,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <div>
          <Typography component="div">Камера:</Typography>
          <Typography color="text.secondary" component="div">
            {props.data[activeStep].camera.full_name}
          </Typography>
          <Typography component="div">Название марсахода:</Typography>
          <Typography color="text.secondary" component="div">
            {props.data[activeStep].rover.name}
          </Typography>
          <Typography component="div">Сол:</Typography>
          <Typography color="text.secondary" component="div">
            {props.data[activeStep].sol}
          </Typography>
          <Typography component="div">Земная дата:</Typography>
          <Typography color="text.secondary" component="div">
            {props.data[activeStep].earth_date}
          </Typography>
        </div>
        <div>
          <Typography component="div">id:</Typography>
          <Typography color="text.secondary" component="div">
            {props.data[activeStep].id}
          </Typography>
          <Typography component="div">Имя:</Typography>
          <Typography color="text.secondary" component="div">
            {props.data[activeStep].camera.name}
          </Typography>
          <Typography component="div">Дата посадки:</Typography>
          <Typography color="text.secondary" component="div">
            {props.data[activeStep].rover.landing_date}
          </Typography>
          <Typography component="div">Дата запуска:</Typography>
          <Typography color="text.secondary" component="div">
            {props.data[activeStep].rover.launch_date}
          </Typography>
        </div>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.data.map((step: any, index: any) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: 500,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.img_src}
                alt={step.id}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Stepper;
