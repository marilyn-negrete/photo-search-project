import { DialogWrapper, DialogContent, DialogBody, DialogHead, DialogBackdrop } from "./Dialog.styled";
import Typography from "../Typography/Typography";
import RadioButton from "../Buttons/RadioButton";
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
                        <Typography variant="h4" label={dialog.title} className={kalam.className}/>
                        <RadioButton 
                            handleOnClick={closeDialog} 
                            srcIcon="/cross.png" size="sm" 
                            shadow={false}
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