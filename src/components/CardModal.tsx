import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stepper from "./Stepper";

interface Props {
  open: boolean;
  handleClose: any;
  data: any;
}

export default function FormDialog(props: Props) {
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <Stepper data={props.data} />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
