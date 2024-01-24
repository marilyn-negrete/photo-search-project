import { DialogWrapper, DialogContent, DialogBody, DialogHead, DialogActions } from "./Dialog.styled";
import Typography from "../Typography/Typography";

const Dialog = (props) => {
const { children, dialog } = props;

    return(
        <DialogWrapper isOpen={dialog.isOpen}>
            <DialogContent>
                <DialogHead>
                    <Typography variant="h4" label={dialog.title} />
                </DialogHead>
                <DialogBody>
                    { children}
                </DialogBody>
            </DialogContent>
        </DialogWrapper>
    );
}

export default Dialog;