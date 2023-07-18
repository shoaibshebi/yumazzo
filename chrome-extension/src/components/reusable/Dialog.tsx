// @ts-nocheck
import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function Modal({ open, openHandler }) {
  return (
    <Dialog
      open={true}
      handler={openHandler}
      className="bg-white absolute z-100 left-1/2"
    >
      <DialogBody className="p-2 py-4 ">
        Your recipe has been submitted!
      </DialogBody>
      <DialogFooter className="p-2">
        <Button
          variant="gradient"
          color="green"
          className="bg-success text-sm rounded-md px-4 py-1 "
          onClick={openHandler}
        >
          <span>Ok</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
