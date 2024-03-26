import { DialogWrapper, DialogContent, DialogBody, DialogHead, DialogBackdrop } from "./Dialog.styled";
import IconButton from "../Buttons/IconButton";
import { Kalam } from 'next/font/google';

// fonts
const kalam = Kalam({ subsets: ['latin'], weight: '700'});

const Dialog = (props) => {
const { children, dialog, closeDialog } = props;

    return(
        <>
            <DialogWrapper isOpen={dialog.isOpen}>
                <DialogContent>
                    <DialogHead>
                        <h4 className={kalam.className}>{dialog.title}</h4>
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