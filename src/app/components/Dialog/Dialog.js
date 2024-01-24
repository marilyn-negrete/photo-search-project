import { DialogWrapper, DialogContent, DialogBody, DialogHead, DialogActions } from "./Dialog.styled";
import Typography from "../Typography/Typography";
import { useState } from "react";

const Dialog = ({title, children}) => {

    return(
        <DialogWrapper>
            <DialogContent>
                <DialogHead>
                    <Typography variant="h4" label={title} />
                </DialogHead>
                <DialogBody>
                    { children}
                </DialogBody>
                <DialogActions>
                    <button>Close</button>
                </DialogActions>
            </DialogContent>
        </DialogWrapper>
    );
}

export default Dialog;