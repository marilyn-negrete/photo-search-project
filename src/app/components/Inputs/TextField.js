import { TextFieldWrapper } from "./Input.styled";

const TextField = (props) => {
    const { handleOnChange, id, label, required } = props;

    console.log(props);
    return (
        <TextFieldWrapper>
            <div>
                <label htmlFor={id}>{label}</label>
                <span>{!required ? '(optional)' : null}</span>
            </div>
            <input defaultValue="" {...props} />
        </TextFieldWrapper>
    )
}

export default TextField;