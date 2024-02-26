import { TextFieldWrapper } from "./Input.styled";

const TextField = (props) => {
    const { handleOnChange, id, label, value, required } = props;

    return (
        <TextFieldWrapper>
            <div>
                <label htmlFor={id}>{label}</label>
                <span>{!required ? '(optional)' : null}</span>
            </div>
            <input type="text" value={value} id={id} onChange={handleOnChange} />
        </TextFieldWrapper>
    )
}

export default TextField;