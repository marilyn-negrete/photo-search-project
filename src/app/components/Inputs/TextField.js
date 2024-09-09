import { TextFieldWrapper } from "./Input.styled";

const TextField = (props) => {
    const { id, label, required, value, handleChange } = props;

    return (
        <TextFieldWrapper>
            <div>
                <label htmlFor={id}>{label}</label>
                <span>{!required ? '(optional)' : null}</span>
            </div>
            <input
                id={id}
                required={required}
                onChange={handleChange}
                value={value}
            />
        </TextFieldWrapper>
    )
}

export default TextField;