import { DialogWrapper, DialogContent, DialogBody, DialogHead, DialogBackdrop, DialogActions } from "./Dialog.styled";
import Typography from "../Typography/Typography";
import { useAppContext } from "@/app/context/AppContext";

const Dialog = (props) => {
const { closeDialog } = useAppContext();
const { children, dialog } = props;

    return(
        <>
            <DialogWrapper isOpen={dialog.isOpen}>
                <DialogContent>
                    <DialogHead>
                        <Typography variant="h4" label={dialog.title} />
                    </DialogHead>
                    <DialogBody>
                        { children}
                    </DialogBody>
                </DialogContent>
                <DialogActions>
                    <button value="close" onClick={closeDialog}>close</button>
                </DialogActions>
            </DialogWrapper>
            {dialog.isOpen ? <DialogBackdrop></DialogBackdrop> : null}
            
        </>
        
    );
}

export default Dialog;