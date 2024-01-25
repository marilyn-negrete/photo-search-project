import { TextFieldWrapper } from "./Input.styled";

const TextField = (props) => {
    const { handleOnChange, id, label, value } = props;

    return(
        <TextFieldWrapper>
            <label for={id}>{label}</label>
            <input type="text" value={value} id={id} onChange={handleOnChange}/>
        </TextFieldWrapper>
    )
}

export default TextField;