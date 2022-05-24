import * as React from "react";
import { SetStateAction, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Typography from "@mui/material/Typography";
import { connect, ConnectedProps } from "react-redux";
import { fetchPhotos, fetchPhotosDate, fetchPhotosSol } from "../redux/actions";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { FetchProgress } from "../redux/actionTypes";
import { RootState } from "../redux/store";
import FormDialog from "./CardModal";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  photos: any;
  fetchProgress: FetchProgress;
}

const PhotoAndInfoCard = (props: Props) => {
  //Paginatin
  const [page, setPage] = useState(1);
  const handleChange = (event: any, value: SetStateAction<number>) => {
    setPage(value);
  };

  useEffect(() => {
    props.getPhotos(page);
  }, [props.getPhotos, page]);

  //Sort

  const [value, setValue] = useState(0);

  const handleChangeSort = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //SELECT

  const [rover, setRover] = useState("MAST");

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setRover(event.target.value as string);
  };

  //Modal

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  //Sol

  const [sol, setSol] = useState("1000");
  const handleChangeSol = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSol(event.target.value as string);
  };

  //Date;

  const [date, setDate] = useState<Date | null>(new Date("2015-08-18"));
  const handleChangeDate = (newValue: Date | null) => {
    setDate(newValue);
  };

  const handleClickSol = () => {
    props.getPhotosSol(sol, rover);
  };
  const handleClickDate = () => {
    props.getPhotosDate(date);
  };
  return (
    <div>
      <FormDialog
        open={open}
        handleClose={handleClose}
        data={props.data.photos}
      />
      <div style={{ display: "flex" }}>
        <h2>Сортировка по:</h2>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs value={value} onChange={handleChangeSort} centered>
            <Tab label="Солу" />
            <Tab label="Дате" />
          </Tabs>
        </Box>
      </div>
      {value === 0 ? (
        <div style={{ display: "flex" }}>
          <Button
            style={{ color: "white", background: "black", width: 200 }}
            variant="contained"
            onClick={handleClickSol}
          >
            Получить
          </Button>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={sol}
            onChange={handleChangeSol}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">MAST</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={rover}
              label="Rover"
              onChange={handleChangeSelect}
            >
              <MenuItem value={"MAST"}>MAST</MenuItem>
              <MenuItem value={"CHEMCAM"}>CHEMCAM</MenuItem>
              <MenuItem value={"FHAZ"}>FHAZ</MenuItem>
              <MenuItem value={"MARDI"}>MARDI</MenuItem>
              <MenuItem value={"RHAZ"}>RHAZ</MenuItem>
            </Select>
          </FormControl>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            style={{
              color: "white",
              background: "black",
              width: 200,
              height: 55,
            }}
            variant="contained"
            onClick={handleClickDate}
          >
            Получить
          </Button>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="mm/dd/yyyy"
              value={date}
              onChange={handleChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      )}
      {props.data.photos.map((item: any) => {
        return (
          <Card
            key={item.id}
            onClick={handleClickOpen}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid black",
              width: 900,
              height: 250,
              margin: 1,
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image={item.img_src}
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Камера
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {item.camera.full_name}
                </Typography>
                <Typography component="div" variant="h5">
                  Название марсахода
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {item.rover.name}
                </Typography>
              </CardContent>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Сол
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {item.sol}
                </Typography>
                <Typography component="div" variant="h5">
                  Земная дата
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {item.earth_date}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        );
      })}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Stack spacing={2}>
          <Pagination
            count={props.data.photos.length < 25 ? 1 : 35}
            size="large"
            color="primary"
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </div>
    </div>
  );
};
const mapState = (state: RootState) => ({
  data: state.photos,
});
const mapDispatch = {
  getPhotos: fetchPhotos,
  getPhotosDate: fetchPhotosDate,
  getPhotosSol: fetchPhotosSol,
};
const connector = connect(mapState, mapDispatch);

export default connector(PhotoAndInfoCard);
