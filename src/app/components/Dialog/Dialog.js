import { DialogWrapper, DialogContent, DialogBody, DialogHead, DialogBackdrop } from "./Dialog.styled";
import IconButton from "../Buttons/IconButton";
import { kalam700 } from "@/app/lib/fonts";

const Dialog = (props) => {
const { children, dialog, closeDialog } = props;

    return(
        <>
            <DialogWrapper className={`${dialog.isOpen ? "open" : ""}`}>
                <DialogContent>
                    <DialogHead>
                        <h4 className={kalam700.className}>{dialog.title}</h4>
                        <IconButton 
                            handleOnClick={closeDialog} 
                            srcIcon="/cross.png" size="sm" 
                        />
                    </DialogHead>
                    <DialogBody>
                        { children}
                    </DialogBody>
                </DialogContent>
            </DialogWrapper>
            {dialog.isOpen ? <DialogBackdrop></DialogBackdrop> : null}
            
        </>
        
    );
}

export default Dialog;